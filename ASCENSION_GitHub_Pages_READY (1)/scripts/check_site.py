#!/usr/bin/env python3
from pathlib import Path
from urllib.parse import urlparse
import re, sys

root = Path(sys.argv[1] if len(sys.argv) > 1 else 'site').resolve()
if not (root / 'index.html').is_file():
    raise SystemExit('ERREUR : index.html manque à la racine du site.')

missing = []
patterns = [
    re.compile(r"(?:href|src)=[\"']([^\"']+)[\"']", re.I),
    re.compile(r"url\([\"']?([^\)\"']+)", re.I),
]
files = list(root.rglob('*.html')) + list(root.rglob('*.css'))
for file in files:
    text = file.read_text(encoding='utf-8')
    for pattern in patterns:
        for ref in pattern.findall(text):
            ref = ref.strip()
            if not ref or ref.startswith(('#', 'mailto:', 'tel:', 'javascript:', 'data:')):
                continue
            parsed = urlparse(ref)
            if parsed.scheme or parsed.netloc:
                continue
            clean = parsed.path
            if not clean or clean.startswith('/'):
                continue
            target = (file.parent / clean).resolve()
            try:
                target.relative_to(root)
            except ValueError:
                missing.append((file.relative_to(root), ref, 'hors du dossier site'))
                continue
            if not target.exists():
                missing.append((file.relative_to(root), ref, 'introuvable'))

if missing:
    print('Liens ou fichiers manquants :')
    for file, ref, reason in missing:
        print(f'- {file}: {ref} ({reason})')
    raise SystemExit(1)

print(f'OK : {len(files)} fichiers HTML/CSS vérifiés, aucun lien local manquant.')
