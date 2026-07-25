#!/usr/bin/env python3
"""Installe l'Atlas V4.9.1 dans une copie locale du wiki ASCENSION."""
from pathlib import Path
import re, shutil, sys, datetime

PACKAGE = Path(__file__).resolve().parent

def main() -> int:
    if len(sys.argv) != 2:
        print('Usage: python patch_navigation.py CHEMIN_DU_WIKI')
        return 2
    target = Path(sys.argv[1]).expanduser().resolve()
    if not (target/'index.html').is_file() or not (target/'assets').is_dir():
        print('Erreur: le dossier doit contenir index.html et assets/.')
        return 1
    stamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
    backup = target/f'_backup_avant_atlas_{stamp}'
    backup.mkdir()
    shutil.copy2(PACKAGE/'atlas.html', target/'atlas.html')
    for name in ('atlas.css','atlas-data.js','atlas.js'):
        shutil.copy2(PACKAGE/'assets'/name, target/'assets'/name)
    changed = 0
    for path in target.glob('*.html'):
        if path.name == 'atlas.html':
            continue
        text = path.read_text(encoding='utf-8')
        if re.search(r'href=["\']atlas\.html["\']', text, re.I):
            continue
        new = re.sub(r'(<a\b[^>]*href=["\']dimensions\.html["\'][^>]*>.*?</a>)', r'\1<a href="atlas.html">Atlas</a>', text, count=1, flags=re.I|re.S)
        if new == text:
            new = re.sub(r'(<a\b[^>]*href=["\']bosses\.html["\'][^>]*>.*?</a>)', r'<a href="atlas.html">Atlas</a>\1', text, count=1, flags=re.I|re.S)
        if new == text:
            new = re.sub(r'</nav>', '<a href="atlas.html">Atlas</a></nav>', text, count=1, flags=re.I)
        if new != text:
            shutil.copy2(path, backup/path.name)
            path.write_text(new, encoding='utf-8')
            changed += 1
    print(f'Atlas installé. {changed} pages modifiées. Sauvegarde: {backup}')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
