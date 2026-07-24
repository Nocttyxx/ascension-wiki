(() => {
'use strict';

const root = document.querySelector('[data-boss-codex]');
if (!root) return;

const BOSSES = [{"id":"minecraft-elder_guardian","name":"Grand gardien","mod":"Minecraft","category":"vanilla","categoryLabel":"Minecraft","tier":1,"order":10,"danger":"extrême","location":"Monuments océaniques","rewards":"Éponge humide, cristaux, poisson","description":"Grand gardien est une rencontre majeure de Minecraft. Dans ASCENSION, Epic Fight et les systèmes de progression peuvent rendre ce combat plus exigeant.","tip":"Apporte lait, portes ou potions aquatiques. La fatigue de minage rend l’exploration très lente.","preparation":"Prépare l’expédition vers : Monuments océaniques. Vérifie l’équipement avant d’activer ou d’approcher la rencontre.","solo":"Conserve une route de fuite et utilise le terrain plutôt que de rester immobile.","coop":"Répartissez nourriture, soins et outils de secours entre plusieurs joueurs.","image":"assets/ascension_logo_final.png","bestiary":"bestiary.html#minecraft-elder_guardian","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false,"wikiApi":"https://minecraft.wiki/api.php","wikiTitle":"Elder Guardian","gearTier":"Diamant aquatique","recommendedPlayers":"1–3 joueurs","attacks":[{"name":"Rayon verrouillé","cue":"Un rayon se charge progressivement sur la cible.","response":"Coupe la ligne de vue derrière un mur du monument.","danger":"élevé"},{"name":"Épines défensives","cue":"Le gardien déploie ses pointes.","response":"Ralentis les attaques de mêlée et privilégie la distance.","danger":"moyen"},{"name":"Fatigue de minage","cue":"L’effet s’applique à l’entrée du monument.","response":"Garde du lait et prépare l’itinéraire avant d’entrer.","danger":"tactique"}],"phases":[{"name":"Infiltration","summary":"Trouver la chambre sans épuiser l’air ni les soins."},{"name":"Duel fermé","summary":"Utiliser les piliers pour interrompre le rayon."}],"equipment":["Respiration III","Affinité aquatique","Arme à distance","Blocs ou portes de secours"],"consumables":["Potion de respiration aquatique","Potion de vision nocturne","Seaux de lait"],"roles":[{"role":"Avant-garde","task":"Garder l’attention sans bloquer les alliés."},{"role":"Distance","task":"Maintenir les dégâts pendant les fenêtres sûres."},{"role":"Soutien","task":"Surveiller soins, terrain et voie de repli."}],"mistakes":["Boire tout le lait avant le boss","Combattre sans obstacle","Négliger les gardiens ordinaires"],"checklist":["Atteindre et sécuriser : Monuments océaniques","Préparer : Respiration III","Préparer : Affinité aquatique","Emporter : Potion de respiration aquatique","Définir la voie de repli et le point de récupération"]},{"id":"minecraft-warden","name":"Warden","mod":"Minecraft","category":"vanilla","categoryLabel":"Minecraft","tier":1,"order":20,"danger":"extrême","location":"Deep Dark, invoqué par les hurleurs sculk","rewards":"Catalyseur de sculk; il vaut mieux l’éviter","description":"Warden est une rencontre majeure de Minecraft. Dans ASCENSION, Epic Fight et les systèmes de progression peuvent rendre ce combat plus exigeant.","tip":"Ne cherche pas le duel au début du pack. Marche accroupi, éloigne les vibrations et prépare une route de fuite.","preparation":"Prépare l’expédition vers : Deep Dark, invoqué par les hurleurs sculk. Vérifie l’équipement avant d’activer ou d’approcher la rencontre.","solo":"Conserve une route de fuite et utilise le terrain plutôt que de rester immobile.","coop":"Répartissez nourriture, soins et outils de secours entre plusieurs joueurs.","image":"assets/ascension_logo_final.png","bestiary":"bestiary.html#minecraft-warden","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false,"wikiApi":"https://minecraft.wiki/api.php","wikiTitle":"Warden","gearTier":"Mobilité et discrétion","recommendedPlayers":"Évitement conseillé","attacks":[{"name":"Détection par vibrations","cue":"Le Warden tourne la tête vers un bruit.","response":"Accroupis-toi, utilise laine et projectiles de diversion.","danger":"extrême"},{"name":"Mêlée écrasante","cue":"Il accélère vers la dernière vibration détectée.","response":"Ne tente pas de bloquer : crée immédiatement de la distance.","danger":"extrême"},{"name":"Boom sonique","cue":"Il ouvre sa cage thoracique et vise à distance.","response":"Change d’axe et quitte la zone plutôt que de te cacher derrière un simple bouclier.","danger":"ultime"}],"phases":[{"name":"Alerte","summary":"Réduire les vibrations avant qu’il ne fixe une cible."},{"name":"Traque","summary":"Priorité absolue à la fuite et à la rupture de contact."}],"equipment":["Laine","Boules de neige ou projectiles","Vitesse et mobilité","Chemin de sortie balisé"],"consumables":["Vision nocturne","Vitesse","Nourriture rapide"],"roles":[{"role":"Avant-garde","task":"Garder l’attention sans bloquer les alliés."},{"role":"Distance","task":"Maintenir les dégâts pendant les fenêtres sûres."},{"role":"Soutien","task":"Surveiller soins, terrain et voie de repli."}],"mistakes":["Chercher un duel normal","Rester groupés","Courir sans plan dans l’Ancient City"],"checklist":["Atteindre et sécuriser : Deep Dark, invoqué par les hurleurs sculk","Préparer : Laine","Préparer : Boules de neige ou projectiles","Emporter : Vision nocturne","Définir la voie de repli et le point de récupération"]},{"id":"majruszsdifficulty-cerberus","name":"Cerbère","mod":"Majrusz's Progressive Difficulty","category":"other","categoryLabel":"Rencontres spéciales","tier":1,"order":30,"danger":"extrême","location":"Tous les biomes du Nether (très rare)","rewards":"Croc de Cerbère, Bone, Coal","description":"Créature ajoutée par la difficulté progressive. Sa présence augmente avec les systèmes de difficulté du monde. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Prépare un équipement complet et une voie de retraite.","solo":"Observe les attaques avant de chercher les dégâts.","coop":"Coordonnez les rôles et évitez de vous regrouper.","image":"assets/bestiary_safe_portraits/majruszsdifficulty-cerberus.webp","bestiary":"bestiary.html#majruszsdifficulty-cerberus","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false,"gearTier":"Diamant conseillé","recommendedPlayers":"2–3 joueurs","attacks":[{"name":"Charge infernale","cue":"Le Cerbère se tasse puis bondit droit devant.","response":"Décale-toi sur le côté et frappe pendant son arrêt.","danger":"élevé"},{"name":"Morsures multiples","cue":"Les trois têtes se redressent avant une rafale.","response":"Ne reste jamais dans son cône frontal.","danger":"élevé"},{"name":"Pression du Nether","cue":"Le terrain et les créatures proches compliquent la zone.","response":"Nettoie l’espace et évite les bords de lave.","danger":"moyen"}],"phases":[{"name":"Chasse","summary":"Le boss teste les déplacements avec des charges."},{"name":"Frénésie","summary":"Les enchaînements rapprochés deviennent plus dangereux."}],"equipment":["Armure diamant avec Protection","Arme principale réparée","Bouclier ou solution défensive","Arc ou arme à distance fiable"],"consumables":["Nourriture à forte saturation","Potions de soin","Seau d’eau ou outil de fuite"],"roles":[{"role":"Appât","task":"Déclencher les charges sans rester devant le boss."},{"role":"Dégâts","task":"Frapper uniquement après les grandes animations."},{"role":"Sécurité","task":"Maintenir une sortie et gérer les créatures proches."}],"mistakes":["Combattre près de la lave","Rester dans son axe","Poursuivre trop longtemps après une charge"],"checklist":["Atteindre et sécuriser : Tous les biomes du Nether (très rare)","Préparer : Armure diamant avec Protection","Préparer : Arme principale réparée","Emporter : Nourriture à forte saturation","Définir la voie de repli et le point de récupération"]},{"id":"twilightforest-naga","name":"Nâga","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":100,"danger":"extrême","location":"Cour de la Naga dans la Forêt du Crépuscule","rewards":"Écailles de Nâga, Trophée de Nâga","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Tourne autour de l’arène et frappe les segments lorsqu’elle ralentit après une charge.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-naga.webp","bestiary":"bestiary.html#twilightforest-naga","quest":"quests.html#boss_hunt","companyGoal":"company-proof-naga","personalGoal":"","proofGoal":"","spoiler":false,"gearTier":"Diamant enchanté","recommendedPlayers":"1–3 joueurs","attacks":[{"name":"Charge serpentiforme","cue":"La Nâga s’aligne et accélère.","response":"Tourne autour de l’arène et frappe les segments au passage.","danger":"élevé"},{"name":"Balayage de queue","cue":"Le corps se replie autour de la cible.","response":"Garde une distance latérale et évite les coins.","danger":"moyen"},{"name":"Rupture des murs","cue":"La charge traverse l’environnement.","response":"Utilise les ouvertures sans te laisser enfermer.","danger":"tactique"}],"phases":[{"name":"Corps complet","summary":"Longue portée et charges faciles à lire."},{"name":"Corps réduit","summary":"Plus mobile, mais fenêtres de mêlée plus nettes."}],"equipment":["Armure diamant enchantée","Arme Epic Fight maîtrisée","Solution de dégâts à distance","Pioche et blocs de secours"],"consumables":["Potions de soin et régénération","Nourriture de combat","Un objet de retour ou Waystone proche"],"roles":[{"role":"Guide","task":"Connaître l’arène et annoncer les changements de phase."},{"role":"Avant-garde","task":"Attirer les charges sans sortir le boss de sa zone."},{"role":"Nettoyage","task":"Gérer clones, projectiles ou créatures secondaires."}],"mistakes":["Reculer en ligne droite","Rester contre les murs","Frapper pendant toute la charge"],"checklist":["Atteindre et sécuriser : Cour de la Naga dans la Forêt du Crépuscule","Préparer : Armure diamant enchantée","Préparer : Arme Epic Fight maîtrisée","Emporter : Potions de soin et régénération","Définir la voie de repli et le point de récupération"]},{"id":"twilightforest-lich","name":"Lich","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":110,"danger":"extrême","location":"Tour de la Liche","rewards":"Bone, Ender Pearl, Golden Boots, Golden Chestplate, Golden Helmet, Golden Leggings, Golden Sword et 5 autre(s)","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Renvoie les projectiles pendant la première phase, puis élimine les clones et serviteurs.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-lich.webp","bestiary":"bestiary.html#twilightforest-lich","quest":"quests.html#boss_hunt","companyGoal":"company-boss-lich","personalGoal":"personal-participation-lich","proofGoal":"","spoiler":false,"gearTier":"Diamant enchanté","recommendedPlayers":"1–3 joueurs","attacks":[{"name":"Orbe réfléchissable","cue":"Un projectile lent et lumineux arrive vers un joueur.","response":"Renvoie-le au bon moment pour casser les protections.","danger":"tactique"},{"name":"Clones de la Liche","cue":"Plusieurs silhouettes similaires apparaissent.","response":"Identifie la vraie cible et garde le centre dégagé.","danger":"moyen"},{"name":"Serviteurs et mêlée","cue":"Les boucliers tombent et le combat se rapproche.","response":"Nettoie les serviteurs avant de prolonger le combo.","danger":"élevé"}],"phases":[{"name":"Boucliers","summary":"Renvoi de projectiles et lecture des clones."},{"name":"Invocation","summary":"Contrôle des serviteurs et de l’espace."},{"name":"Duel final","summary":"Mêlée plus directe après la chute des défenses."}],"equipment":["Armure diamant enchantée","Arme Epic Fight maîtrisée","Solution de dégâts à distance","Pioche et blocs de secours"],"consumables":["Potions de soin et régénération","Nourriture de combat","Un objet de retour ou Waystone proche"],"roles":[{"role":"Guide","task":"Connaître l’arène et annoncer les changements de phase."},{"role":"Avant-garde","task":"Attirer les charges sans sortir le boss de sa zone."},{"role":"Nettoyage","task":"Gérer clones, projectiles ou créatures secondaires."}],"mistakes":["Tirer sans gérer les renvois","Ignorer les serviteurs","Se séparer dans la tour"],"checklist":["Atteindre et sécuriser : Tour de la Liche","Préparer : Armure diamant enchantée","Préparer : Arme Epic Fight maîtrisée","Emporter : Potions de soin et régénération","Définir la voie de repli et le point de récupération"]},{"id":"twilightforest-minoshroom","name":"Minoshroom","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":120,"danger":"extrême","location":"Labyrinthe de la Forêt du Crépuscule","rewards":"Hache en diamant du Minotaure, Stroganoff de Meef, Minoshroom Trophy","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-minoshroom.webp","bestiary":"bestiary.html#twilightforest-minoshroom","quest":"quests.html#boss_hunt","companyGoal":"company-boss-minoshroom","personalGoal":"personal-participation-minoshroom","proofGoal":"","spoiler":false,"gearTier":"Diamant enchanté","recommendedPlayers":"1–3 joueurs","attacks":[{"name":"Charge du labyrinthe","cue":"Le Minoshroom prend de l’élan dans une ligne.","response":"Esquive latéralement et utilise les piliers.","danger":"élevé"},{"name":"Combo de hache","cue":"Il lève son arme et avance vers la cible.","response":"Laisse finir la série avant d’entrer.","danger":"élevé"},{"name":"Pression de salle","cue":"Peu d’espace reste autour du boss.","response":"Évite de coller les murs et garde une sortie.","danger":"moyen"}],"phases":[{"name":"Approche","summary":"Sécuriser le labyrinthe et la salle."},{"name":"Duel","summary":"Alterner esquive des charges et dégâts courts."}],"equipment":["Armure diamant enchantée","Arme Epic Fight maîtrisée","Solution de dégâts à distance","Pioche et blocs de secours"],"consumables":["Potions de soin et régénération","Nourriture de combat","Un objet de retour ou Waystone proche"],"roles":[{"role":"Guide","task":"Connaître l’arène et annoncer les changements de phase."},{"role":"Avant-garde","task":"Attirer les charges sans sortir le boss de sa zone."},{"role":"Nettoyage","task":"Gérer clones, projectiles ou créatures secondaires."}],"mistakes":["Entrer avec des Minotaures actifs","Bloquer la sortie","Allonger les combos"],"checklist":["Atteindre et sécuriser : Labyrinthe de la Forêt du Crépuscule","Préparer : Armure diamant enchantée","Préparer : Arme Epic Fight maîtrisée","Emporter : Potions de soin et régénération","Définir la voie de repli et le point de récupération"]},{"id":"twilightforest-hydra","name":"Hydre","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":130,"danger":"extrême","location":"Repaire de l’Hydre dans le marais de feu","rewards":"Sang ardent, Tranche d'Hydre, Trophée d'Hydre","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Vise les têtes ouvertes après leurs attaques; les têtes fermées réduisent fortement les dégâts.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-hydra.webp","bestiary":"bestiary.html#twilightforest-hydra","quest":"quests.html#boss_hunt","companyGoal":"company-boss-hydra","personalGoal":"personal-participation-hydra","proofGoal":"","spoiler":false,"gearTier":"Diamant enchanté","recommendedPlayers":"2–4 joueurs","attacks":[{"name":"Souffle de feu","cue":"Une tête se fixe et inspire.","response":"Quitte le cône frontal et attaque sur le côté.","danger":"extrême"},{"name":"Bombes incendiaires","cue":"Des projectiles de feu sont préparés par une tête.","response":"Reste mobile et ne regroupe pas l’équipe.","danger":"élevé"},{"name":"Morsure de tête","cue":"Une tête descend brusquement vers le sol.","response":"Esquive puis frappe la tête pendant sa récupération.","danger":"élevé"}],"phases":[{"name":"Observation","summary":"Identifier quelle tête prépare l’attaque."},{"name":"Fenêtres des têtes","summary":"Concentrer les dégâts sur les têtes exposées."}],"equipment":["Résistance au feu","Armure diamant enchantée","Arme rapide","Solution à distance"],"consumables":["Résistance au feu","Soins instantanés","Nourriture premium"],"roles":[{"role":"Guide","task":"Connaître l’arène et annoncer les changements de phase."},{"role":"Avant-garde","task":"Attirer les charges sans sortir le boss de sa zone."},{"role":"Nettoyage","task":"Gérer clones, projectiles ou créatures secondaires."}],"mistakes":["Rester devant plusieurs têtes","Ignorer les bombes","Poursuivre sous le souffle"],"checklist":["Atteindre et sécuriser : Repaire de l’Hydre dans le marais de feu","Préparer : Résistance au feu","Préparer : Armure diamant enchantée","Emporter : Résistance au feu","Définir la voie de repli et le point de récupération"]},{"id":"twilightforest-knight_phantom","name":"Chevalier fantôme","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":140,"danger":"extrême","location":"Forteresse des Chevaliers","rewards":"Butin géré par le mod; vérifier JEI et la table de butin en jeu","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-knight_phantom.webp","bestiary":"bestiary.html#twilightforest-knight_phantom","quest":"quests.html#boss_hunt","companyGoal":"company-boss-knight-phantom","personalGoal":"personal-participation-knight-phantom","proofGoal":"","spoiler":false,"gearTier":"Diamant enchanté","recommendedPlayers":"2–4 joueurs","attacks":[{"name":"Charge spectrale","cue":"Un chevalier quitte la formation et vise.","response":"Écarte-toi de son axe et frappe après son passage.","danger":"élevé"},{"name":"Formation circulaire","cue":"Les chevaliers orbitent avant une attaque.","response":"Reste près du centre et observe la cible active.","danger":"moyen"},{"name":"Pression multiple","cue":"Plusieurs entités deviennent menaçantes à la fois.","response":"Concentre les dégâts sur une cible et annonce les charges.","danger":"élevé"}],"phases":[{"name":"Formation","summary":"Lecture des mouvements et cible active."},{"name":"Réduction du groupe","summary":"Moins de cibles, mais davantage de pression individuelle."}],"equipment":["Armure diamant enchantée","Arme Epic Fight maîtrisée","Solution de dégâts à distance","Pioche et blocs de secours"],"consumables":["Potions de soin et régénération","Nourriture de combat","Un objet de retour ou Waystone proche"],"roles":[{"role":"Guide","task":"Connaître l’arène et annoncer les changements de phase."},{"role":"Avant-garde","task":"Attirer les charges sans sortir le boss de sa zone."},{"role":"Nettoyage","task":"Gérer clones, projectiles ou créatures secondaires."}],"mistakes":["Se disperser dans la crypte","Changer constamment de cible","Poursuivre un fantôme hors position"],"checklist":["Atteindre et sécuriser : Forteresse des Chevaliers","Préparer : Armure diamant enchantée","Préparer : Arme Epic Fight maîtrisée","Emporter : Potions de soin et régénération","Définir la voie de repli et le point de récupération"]},{"id":"twilightforest-ur_ghast","name":"Ur-Ghast","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":150,"danger":"extrême","location":"Tour sombre","rewards":"Carminite, Larmes ardentes, Trophée d'Ur-Ghast","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Utilise les pièges à Ghast de la tour et détruis les Carminites qui entretiennent le combat.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-ur_ghast.webp","bestiary":"bestiary.html#twilightforest-ur_ghast","quest":"quests.html#boss_hunt","companyGoal":"company-boss-ur-ghast","personalGoal":"personal-participation-ur-ghast","proofGoal":"","spoiler":false,"gearTier":"Diamant enchanté","recommendedPlayers":"2–4 joueurs","attacks":[{"name":"Larmes explosives","cue":"Des projectiles descendent vers la plateforme.","response":"Reste mobile et utilise les protections de la tour.","danger":"élevé"},{"name":"Crise de l’Ur-Ghast","cue":"Le boss pousse un cri et modifie son rythme.","response":"Priorité à la survie pendant la séquence.","danger":"extrême"},{"name":"Ghastlings","cue":"Des créatures volantes secondaires apparaissent.","response":"Nettoie-les avant de réactiver les mécanismes.","danger":"moyen"}],"phases":[{"name":"Activation des pièges","summary":"Utiliser la tour pour attirer et affaiblir le boss."},{"name":"Crise","summary":"Gérer les projectiles et les renforts."}],"equipment":["Armure diamant enchantée","Arme Epic Fight maîtrisée","Solution de dégâts à distance","Pioche et blocs de secours"],"consumables":["Potions de soin et régénération","Nourriture de combat","Un objet de retour ou Waystone proche"],"roles":[{"role":"Guide","task":"Connaître l’arène et annoncer les changements de phase."},{"role":"Avant-garde","task":"Attirer les charges sans sortir le boss de sa zone."},{"role":"Nettoyage","task":"Gérer clones, projectiles ou créatures secondaires."}],"mistakes":["Oublier les pièges de la tour","Rester au bord","Ignorer les Ghastlings"],"checklist":["Atteindre et sécuriser : Tour sombre","Préparer : Armure diamant enchantée","Préparer : Arme Epic Fight maîtrisée","Emporter : Potions de soin et régénération","Définir la voie de repli et le point de récupération"]},{"id":"twilightforest-alpha_yeti","name":"Yéti Alpha","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":160,"danger":"extrême","location":"Forêt enneigée et tanière de l’Alpha Yeti","rewards":"Fourrure de Yéti Alpha, Alpha Yeti Trophy, Bombe glacée","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-alpha_yeti.webp","bestiary":"bestiary.html#twilightforest-alpha_yeti","quest":"quests.html#boss_hunt","companyGoal":"company-boss-alpha-yeti","personalGoal":"personal-participation-alpha-yeti","proofGoal":"","spoiler":false,"gearTier":"Diamant enchanté","recommendedPlayers":"1–3 joueurs","attacks":[{"name":"Lancer de glace","cue":"Le Yéti lève un bloc ou accumule du froid.","response":"Change de direction avant le lancer.","danger":"élevé"},{"name":"Saut écrasant","cue":"Il bondit verticalement.","response":"Éloigne-toi de la zone d’impact.","danger":"élevé"},{"name":"Projection du joueur","cue":"Il attrape une cible à proximité.","response":"Évite la mêlée prolongée et garde des soins.","danger":"élevé"}],"phases":[{"name":"Contrôle à distance","summary":"Esquiver les projectiles et conserver l’espace."},{"name":"Colère rapprochée","summary":"Limiter la mêlée et punir les récupérations."}],"equipment":["Armure diamant enchantée","Arme Epic Fight maîtrisée","Solution de dégâts à distance","Pioche et blocs de secours"],"consumables":["Potions de soin et régénération","Nourriture de combat","Un objet de retour ou Waystone proche"],"roles":[{"role":"Guide","task":"Connaître l’arène et annoncer les changements de phase."},{"role":"Avant-garde","task":"Attirer les charges sans sortir le boss de sa zone."},{"role":"Nettoyage","task":"Gérer clones, projectiles ou créatures secondaires."}],"mistakes":["Combattre collé au boss","Rester sous le saut","Négliger la résistance au froid"],"checklist":["Atteindre et sécuriser : Forêt enneigée et tanière de l’Alpha Yeti","Préparer : Armure diamant enchantée","Préparer : Arme Epic Fight maîtrisée","Emporter : Potions de soin et régénération","Définir la voie de repli et le point de récupération"]},{"id":"twilightforest-snow_queen","name":"Reine des Neiges","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":170,"danger":"extrême","location":"Palais d’Aurora","rewards":"Packed Ice, Snowball, Arc du chercheur, Trophée de la Reine des Neiges, Tri-Bow","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-snow_queen.webp","bestiary":"bestiary.html#twilightforest-snow_queen","quest":"quests.html#boss_hunt","companyGoal":"company-boss-snow-queen","personalGoal":"personal-participation-snow-queen","proofGoal":"","spoiler":false,"gearTier":"Diamant enchanté","recommendedPlayers":"2–4 joueurs","attacks":[{"name":"Cristaux de glace","cue":"Des entités glacées apparaissent autour de la reine.","response":"Nettoie rapidement pour préserver la visibilité.","danger":"moyen"},{"name":"Charge aérienne","cue":"La reine se place dans l’axe d’un joueur.","response":"Décale-toi et évite les murs du palais.","danger":"élevé"},{"name":"Plongeon de glace","cue":"Elle monte avant de redescendre sur une zone.","response":"Quitte le centre et garde une esquive.","danger":"élevé"}],"phases":[{"name":"Cristaux","summary":"Contrôle des invocations et de l’espace."},{"name":"Charges","summary":"Lecture des axes de déplacement."},{"name":"Plongeons","summary":"Survie aux impacts et fenêtres courtes."}],"equipment":["Armure diamant enchantée","Arme Epic Fight maîtrisée","Solution de dégâts à distance","Pioche et blocs de secours"],"consumables":["Potions de soin et régénération","Nourriture de combat","Un objet de retour ou Waystone proche"],"roles":[{"role":"Guide","task":"Connaître l’arène et annoncer les changements de phase."},{"role":"Avant-garde","task":"Attirer les charges sans sortir le boss de sa zone."},{"role":"Nettoyage","task":"Gérer clones, projectiles ou créatures secondaires."}],"mistakes":["Ignorer les cristaux","Rester contre les murs","Poursuivre pendant le vol"],"checklist":["Atteindre et sécuriser : Palais d’Aurora","Préparer : Armure diamant enchantée","Préparer : Arme Epic Fight maîtrisée","Emporter : Potions de soin et régénération","Définir la voie de repli et le point de récupération"]},{"id":"mowziesmobs-wroughtnaut","name":"Ferrous Wroughtnaut","mod":"Mowzie's Mobs","category":"mowzie","categoryLabel":"Mowzie’s Mobs","tier":3,"order":200,"danger":"extrême","location":"Chambre souterraine du Wroughtnaut","rewards":"Hache des milles métaux, Casque de Chevalier Forgé","description":"Créature animée et tactique de Mowzie’s Mobs. Ses attaques sont généralement très lisibles, mais sévèrement punissantes. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Attaque son point faible après ses grandes animations. Le frapper frontalement est rarement rentable.","preparation":"Prépare mobilité, nourriture et soins. Ces gardiens punissent fortement les attaques lancées sans observation.","solo":"Cherche les fenêtres après les grandes animations et évite les échanges de dégâts directs.","coop":"Alternez l’attention du boss et annoncez clairement ses longues animations.","image":"assets/bestiary_safe_portraits/mowziesmobs-wroughtnaut.webp","bestiary":"bestiary.html#mowziesmobs-wroughtnaut","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-mowzie","spoiler":false,"gearTier":"Diamant optimisé / Netherite","recommendedPlayers":"1–3 joueurs","attacks":[{"name":"Balayage de hache","cue":"Le Wroughtnaut arme un grand mouvement horizontal.","response":"Esquive à travers ou hors de l’arc, puis vise son dos.","danger":"extrême"},{"name":"Écrasement","cue":"Il lève fortement sa hache.","response":"Quitte la zone frontale et attends l’impact.","danger":"extrême"},{"name":"Protection frontale","cue":"Les coups sur l’armure sont inefficaces.","response":"Cherche uniquement la fenêtre dans son dos.","danger":"tactique"}],"phases":[{"name":"Lecture","summary":"Déclencher une attaque sans se faire toucher."},{"name":"Punition arrière","summary":"Frapper brièvement le point faible puis repartir."}],"equipment":["Armure diamant optimisée ou Netherite","Arme principale et arme secondaire","Protection adaptée à l’élément du boss","Backpack préparé pour un combat long"],"consumables":["Soins instantanés et régénération","Résistance ou effet élémentaire adapté","Nourriture et ressources de réparation"],"roles":[{"role":"Observateur","task":"Annoncer les longues animations et les fenêtres."},{"role":"Dégâts","task":"Attaquer uniquement sur les ouvertures confirmées."},{"role":"Contrôle","task":"Éloigner les alliés des zones élémentaires."}],"mistakes":["Frapper l’armure de face","Spam de combos","Rester après la première ouverture"],"checklist":["Atteindre et sécuriser : Chambre souterraine du Wroughtnaut","Préparer : Armure diamant optimisée ou Netherite","Préparer : Arme principale et arme secondaire","Emporter : Soins instantanés et régénération","Définir la voie de repli et le point de récupération"]},{"id":"mowziesmobs-frostmaw","name":"Frostmaw","mod":"Mowzie's Mobs","category":"mowzie","categoryLabel":"Mowzie’s Mobs","tier":3,"order":210,"danger":"extrême","location":"Structure enneigée isolée","rewards":"Cristal de Glace, Music Disc","description":"Créature animée et tactique de Mowzie’s Mobs. Ses attaques sont généralement très lisibles, mais sévèrement punissantes. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Reste mobile et évite son souffle gelé. Ses fenêtres d’ouverture apparaissent après ses attaques lourdes.","preparation":"Prépare mobilité, nourriture et soins. Ces gardiens punissent fortement les attaques lancées sans observation.","solo":"Cherche les fenêtres après les grandes animations et évite les échanges de dégâts directs.","coop":"Alternez l’attention du boss et annoncez clairement ses longues animations.","image":"assets/bestiary_safe_portraits/mowziesmobs-frostmaw.webp","bestiary":"bestiary.html#mowziesmobs-frostmaw","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-mowzie","spoiler":false,"gearTier":"Diamant optimisé / Netherite","recommendedPlayers":"2–4 joueurs","attacks":[{"name":"Souffle glacé","cue":"Le Frostmaw ouvre la gueule et accumule du givre.","response":"Quitte le cône et utilise un obstacle.","danger":"extrême"},{"name":"Écrasement de zone","cue":"Il lève ses bras avant de frapper le sol.","response":"Éloigne-toi immédiatement.","danger":"élevé"},{"name":"Cristal de glace","cue":"Une attaque de froid est préparée à distance.","response":"Reste mobile et ne te regroupe pas.","danger":"élevé"}],"phases":[{"name":"Sommeil","summary":"Préparer le terrain avant de provoquer le boss."},{"name":"Éveil","summary":"Alterner esquive du froid et dégâts courts."}],"equipment":["Résistance au froid si disponible","Armure Netherite ou diamant optimisée","Arme mobile","Distance de secours"],"consumables":["Soins instantanés et régénération","Résistance ou effet élémentaire adapté","Nourriture et ressources de réparation"],"roles":[{"role":"Observateur","task":"Annoncer les longues animations et les fenêtres."},{"role":"Dégâts","task":"Attaquer uniquement sur les ouvertures confirmées."},{"role":"Contrôle","task":"Éloigner les alliés des zones élémentaires."}],"mistakes":["Le réveiller sans préparation","Rester dans le souffle","Regrouper toute l’équipe"],"checklist":["Atteindre et sécuriser : Structure enneigée isolée","Préparer : Résistance au froid si disponible","Préparer : Armure Netherite ou diamant optimisée","Emporter : Soins instantanés et régénération","Définir la voie de repli et le point de récupération"]},{"id":"mowziesmobs-umvuthi","name":"Umvuthi, the Sunbird","mod":"Mowzie's Mobs","category":"mowzie","categoryLabel":"Mowzie’s Mobs","tier":3,"order":220,"danger":"extrême","location":"Bosquet d’Umvuthi dans les savanes","rewards":"Feather, Sol Visage","description":"Créature animée et tactique de Mowzie’s Mobs. Ses attaques sont généralement très lisibles, mais sévèrement punissantes. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Utilise le décor contre ses attaques solaires et élimine rapidement les soutiens Umvuthana.","preparation":"Prépare mobilité, nourriture et soins. Ces gardiens punissent fortement les attaques lancées sans observation.","solo":"Cherche les fenêtres après les grandes animations et évite les échanges de dégâts directs.","coop":"Alternez l’attention du boss et annoncez clairement ses longues animations.","image":"assets/bestiary_safe_portraits/mowziesmobs-umvuthi.webp","bestiary":"bestiary.html#mowziesmobs-umvuthi","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-mowzie","spoiler":false,"gearTier":"Diamant optimisé / Netherite","recommendedPlayers":"2–4 joueurs","attacks":[{"name":"Rayon solaire","cue":"Umvuthi canalise une lumière intense.","response":"Coupe l’axe et garde un obstacle proche.","danger":"extrême"},{"name":"Frappe du soleil","cue":"Une zone lumineuse se dessine au sol.","response":"Sors de la marque avant l’impact.","danger":"élevé"},{"name":"Disciples","cue":"Des créatures du bosquet renforcent la pression.","response":"Un joueur les contrôle pendant que les autres restent sur le boss.","danger":"moyen"}],"phases":[{"name":"Bosquet","summary":"Sécuriser les disciples et les obstacles."},{"name":"Soleil concentré","summary":"Gérer les zones lumineuses et les rayons."}],"equipment":["Armure diamant optimisée ou Netherite","Arme principale et arme secondaire","Protection adaptée à l’élément du boss","Backpack préparé pour un combat long"],"consumables":["Soins instantanés et régénération","Résistance ou effet élémentaire adapté","Nourriture et ressources de réparation"],"roles":[{"role":"Observateur","task":"Annoncer les longues animations et les fenêtres."},{"role":"Dégâts","task":"Attaquer uniquement sur les ouvertures confirmées."},{"role":"Contrôle","task":"Éloigner les alliés des zones élémentaires."}],"mistakes":["Rester à découvert","Ignorer les disciples","Attaquer pendant la canalisation sans sortie"],"checklist":["Atteindre et sécuriser : Bosquet d’Umvuthi dans les savanes","Préparer : Armure diamant optimisée ou Netherite","Préparer : Arme principale et arme secondaire","Emporter : Soins instantanés et régénération","Définir la voie de repli et le point de récupération"]},{"id":"mowziesmobs-sculptor","name":"Tongbi, the Sculptor","mod":"Mowzie's Mobs","category":"mowzie","categoryLabel":"Mowzie’s Mobs","tier":3,"order":230,"danger":"extrême","location":"Monastère en montagne","rewards":"Geomancer Beads, Geomancer Belt, Geomancer Robe, Geomancer Sandals, Geomancer Staff","description":"Créature animée et tactique de Mowzie’s Mobs. Ses attaques sont généralement très lisibles, mais sévèrement punissantes. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Prépare mobilité, nourriture et soins. Ces gardiens punissent fortement les attaques lancées sans observation.","solo":"Cherche les fenêtres après les grandes animations et évite les échanges de dégâts directs.","coop":"Alternez l’attention du boss et annoncez clairement ses longues animations.","image":"assets/bestiary_safe_portraits/mowziesmobs-sculptor.webp","bestiary":"bestiary.html#mowziesmobs-sculptor","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-mowzie","spoiler":false,"gearTier":"Mobilité et précision","recommendedPlayers":"1 joueur à la fois","attacks":[{"name":"Épreuve de mouvement","cue":"Le parcours demande un enchaînement précis.","response":"Observe avant de sauter et évite de te précipiter.","danger":"tactique"},{"name":"Repoussement","cue":"Une animation ou un impact menace la plateforme.","response":"Garde une marge et recentre-toi.","danger":"élevé"},{"name":"Erreur cumulative","cue":"La fatigue et la précipitation réduisent la précision.","response":"Fais une pause et recommence proprement.","danger":"moyen"}],"phases":[{"name":"Lecture du parcours","summary":"Comprendre les plateformes et le rythme."},{"name":"Exécution","summary":"Enchaîner les mouvements sans forcer."}],"equipment":["Armure légère","Mobilité Epic Fight","Nourriture","Point de retour proche"],"consumables":["Vitesse si autorisée","Chute lente si compatible","Soins"],"roles":[{"role":"Candidat","task":"Réaliser l’épreuve sans précipitation."},{"role":"Observateur","task":"Annoncer le rythme et repérer les erreurs."},{"role":"Sécurité","task":"Préparer la récupération en cas de chute."}],"mistakes":["Courir sans observer","Porter un équipement gênant","Multiplier les tentatives sans pause"],"checklist":["Atteindre et sécuriser : Monastère en montagne","Préparer : Armure légère","Préparer : Mobilité Epic Fight","Emporter : Vitesse si autorisée","Définir la voie de repli et le point de récupération"]},{"id":"aquamirae-captain_cornelia","name":"Ghost of Captain Cornelia","mod":"Aquamirae","category":"aquamirae","categoryLabel":"Aquamirae","tier":3,"order":240,"danger":"extrême","location":"Navire de pillards dans l’Ice Maze","rewards":"Frozen Key, Music Disc, Oxygen Tank, Echo of the Ship Graveyard, Three-Bolt Helmet, Treasure Pouch, Air","description":"Créature abyssale ou spectrale d’Aquamirae, principalement rencontrée dans l’Ice Maze et ses eaux gelées. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Nettoie le pont et garde de la mobilité avant d’engager le duel spectral.","preparation":"Prends de la respiration, de la mobilité aquatique et une résistance adaptée aux océans gelés.","solo":"Nettoie les créatures secondaires avant d’engager la rencontre majeure.","coop":"Un joueur contrôle les ennemis secondaires pendant que le reste du groupe se concentre sur la cible.","image":"assets/bestiary_safe_portraits/aquamirae-captain_cornelia.webp","bestiary":"bestiary.html#aquamirae-captain_cornelia","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false,"gearTier":"Diamant optimisé / Netherite","recommendedPlayers":"2–4 joueurs","attacks":[{"name":"Tir spectral","cue":"La capitaine prend de la distance et vise.","response":"Utilise le navire comme couverture.","danger":"élevé"},{"name":"Assaut de pont","cue":"Elle se rapproche rapidement.","response":"Évite les bords et garde le centre du pont.","danger":"élevé"},{"name":"Équipage fantôme","cue":"Des ennemis secondaires occupent le navire.","response":"Nettoie les renforts avant de reprendre le boss.","danger":"moyen"}],"phases":[{"name":"Abordage","summary":"Sécuriser le pont et la mobilité."},{"name":"Duel spectral","summary":"Alterner couverture et dégâts concentrés."}],"equipment":["Armure diamant optimisée ou Netherite","Arme principale et arme secondaire","Protection adaptée à l’élément du boss","Backpack préparé pour un combat long"],"consumables":["Soins instantanés et régénération","Résistance ou effet élémentaire adapté","Nourriture et ressources de réparation"],"roles":[{"role":"Navigateur","task":"Maintenir respiration et trajectoire dans l’Ice Maze."},{"role":"Boss","task":"Conserver l’attention de la cible principale."},{"role":"Nettoyage","task":"Éliminer les ennemis secondaires et sécuriser l’eau."}],"mistakes":["Tomber du navire","Ignorer l’équipage","Combattre sans respiration aquatique"],"checklist":["Atteindre et sécuriser : Navire de pillards dans l’Ice Maze","Préparer : Armure diamant optimisée ou Netherite","Préparer : Arme principale et arme secondaire","Emporter : Soins instantanés et régénération","Définir la voie de repli et le point de récupération"]},{"id":"aquamirae-maze_mother","name":"Mother of the Maze","mod":"Aquamirae","category":"aquamirae","categoryLabel":"Aquamirae","tier":3,"order":250,"danger":"extrême","location":"Profondeurs de l’Ice Maze","rewards":"Abyssal Amethyst, Sharp Bones, Echo of the Ship Graveyard, Prismarine Crystals","description":"Créature abyssale ou spectrale d’Aquamirae, principalement rencontrée dans l’Ice Maze et ses eaux gelées. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Prends de la respiration, de la mobilité aquatique et une résistance adaptée aux océans gelés.","solo":"Nettoie les créatures secondaires avant d’engager la rencontre majeure.","coop":"Un joueur contrôle les ennemis secondaires pendant que le reste du groupe se concentre sur la cible.","image":"assets/bestiary_safe_portraits/aquamirae-maze_mother.webp","bestiary":"bestiary.html#aquamirae-maze_mother","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false,"gearTier":"Diamant optimisé / Netherite","recommendedPlayers":"3–4 joueurs","attacks":[{"name":"Balayage tentaculaire","cue":"Les appendices se déplacent autour de la zone.","response":"Éloigne-toi du centre et garde une esquive.","danger":"extrême"},{"name":"Zone de froid","cue":"Le sol ou l’eau se couvrent de particules glacées.","response":"Change de niveau et quitte la zone.","danger":"élevé"},{"name":"Créatures du labyrinthe","cue":"Des menaces secondaires rejoignent le combat.","response":"Désigne un joueur au nettoyage.","danger":"élevé"}],"phases":[{"name":"Contrôle du labyrinthe","summary":"Créer de l’espace et sécuriser l’air."},{"name":"Pression de la Mère","summary":"Survivre aux balayages et aux renforts."}],"equipment":["Armure diamant optimisée ou Netherite","Arme principale et arme secondaire","Protection adaptée à l’élément du boss","Backpack préparé pour un combat long"],"consumables":["Soins instantanés et régénération","Résistance ou effet élémentaire adapté","Nourriture et ressources de réparation"],"roles":[{"role":"Navigateur","task":"Maintenir respiration et trajectoire dans l’Ice Maze."},{"role":"Boss","task":"Conserver l’attention de la cible principale."},{"role":"Nettoyage","task":"Éliminer les ennemis secondaires et sécuriser l’eau."}],"mistakes":["Poursuivre sans air","Rester au centre","Ignorer les renforts"],"checklist":["Atteindre et sécuriser : Profondeurs de l’Ice Maze","Préparer : Armure diamant optimisée ou Netherite","Préparer : Arme principale et arme secondaire","Emporter : Soins instantanés et régénération","Définir la voie de repli et le point de récupération"]},{"id":"stalwart_dungeons-incomplete_wither","name":"Incomplete Wither","mod":"Stalwart Dungeons","category":"stalwart","categoryLabel":"Stalwart Dungeons","tier":3,"order":260,"danger":"extrême","location":"Awful Dungeon du Nether","rewards":"Bone, Coal, Wither Skeleton Skull","description":"Gardien d’un donjon de Stalwart Dungeons. La rencontre est liée à une structure du Nether ou de l’End. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Explore de nouveaux chunks et nettoie méthodiquement la structure avant d’ouvrir la salle du gardien.","solo":"Ne combats pas le boss avec les créatures du donjon encore actives autour de toi.","coop":"Sécurisez les couloirs, définissez un point de repli et gardez une personne chargée des ennemis secondaires.","image":"assets/bestiary_safe_portraits/stalwart_dungeons-incomplete_wither.webp","bestiary":"bestiary.html#stalwart_dungeons-incomplete_wither","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false,"gearTier":"Diamant optimisé / Netherite","recommendedPlayers":"2–4 joueurs","attacks":[{"name":"Crânes instables","cue":"Le boss vise puis libère des projectiles explosifs.","response":"Utilise les murs du donjon.","danger":"élevé"},{"name":"Explosion incomplète","cue":"Une charge d’énergie se concentre autour de lui.","response":"Recule hors de la salle centrale.","danger":"extrême"},{"name":"Pression Wither","cue":"L’effet réduit progressivement les marges d’erreur.","response":"Soigne tôt et ne laisse pas les cœurs descendre.","danger":"élevé"}],"phases":[{"name":"Projectile","summary":"Couper la ligne de vue et nettoyer la salle."},{"name":"Instabilité","summary":"Éviter les explosions et terminer rapidement."}],"equipment":["Armure diamant optimisée ou Netherite","Arme principale et arme secondaire","Protection adaptée à l’élément du boss","Backpack préparé pour un combat long"],"consumables":["Soins instantanés et régénération","Résistance ou effet élémentaire adapté","Nourriture et ressources de réparation"],"roles":[{"role":"Avant-garde","task":"Occuper le gardien loin des couloirs."},{"role":"Nettoyage","task":"Empêcher les créatures du donjon d’entrer dans l’arène."},{"role":"Soutien","task":"Garder le point de repli et les ressources communes."}],"mistakes":["Combattre dans un couloir","Attendre trop longtemps pour soigner","Laisser des mobs du donjon actifs"],"checklist":["Atteindre et sécuriser : Awful Dungeon du Nether","Préparer : Armure diamant optimisée ou Netherite","Préparer : Arme principale et arme secondaire","Emporter : Soins instantanés et régénération","Définir la voie de repli et le point de récupération"]},{"id":"stalwart_dungeons-awful_ghast","name":"Awful Ghast","mod":"Stalwart Dungeons","category":"stalwart","categoryLabel":"Stalwart Dungeons","tier":3,"order":270,"danger":"extrême","location":"Awful Dungeon du Nether","rewards":"Ghast Tear, Awful Crystal, Awful Gun","description":"Gardien d’un donjon de Stalwart Dungeons. La rencontre est liée à une structure du Nether ou de l’End. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Explore de nouveaux chunks et nettoie méthodiquement la structure avant d’ouvrir la salle du gardien.","solo":"Ne combats pas le boss avec les créatures du donjon encore actives autour de toi.","coop":"Sécurisez les couloirs, définissez un point de repli et gardez une personne chargée des ennemis secondaires.","image":"assets/bestiary_safe_portraits/stalwart_dungeons-awful_ghast.webp","bestiary":"bestiary.html#stalwart_dungeons-awful_ghast","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false,"gearTier":"Diamant optimisé / Netherite","recommendedPlayers":"2–4 joueurs","attacks":[{"name":"Barrage de feu","cue":"Le Ghast prend de la hauteur et vise.","response":"Bouge entre les couvertures et renvoie les projectiles sûrs.","danger":"élevé"},{"name":"Explosion de plateforme","cue":"Plusieurs impacts se concentrent sur une zone.","response":"Évacue avant la destruction du terrain.","danger":"élevé"},{"name":"Renforts du donjon","cue":"D’autres menaces occupent les couloirs.","response":"Nettoie les angles morts.","danger":"moyen"}],"phases":[{"name":"Vol","summary":"Maintenir les dégâts à distance."},{"name":"Barrage","summary":"Survivre aux explosions avant de reprendre le tir."}],"equipment":["Armure diamant optimisée ou Netherite","Arme principale et arme secondaire","Protection adaptée à l’élément du boss","Backpack préparé pour un combat long"],"consumables":["Soins instantanés et régénération","Résistance ou effet élémentaire adapté","Nourriture et ressources de réparation"],"roles":[{"role":"Avant-garde","task":"Occuper le gardien loin des couloirs."},{"role":"Nettoyage","task":"Empêcher les créatures du donjon d’entrer dans l’arène."},{"role":"Soutien","task":"Garder le point de repli et les ressources communes."}],"mistakes":["Rester sans couverture","Négliger le terrain détruit","Utiliser uniquement la mêlée"],"checklist":["Atteindre et sécuriser : Awful Dungeon du Nether","Préparer : Armure diamant optimisée ou Netherite","Préparer : Arme principale et arme secondaire","Emporter : Soins instantanés et régénération","Définir la voie de repli et le point de récupération"]},{"id":"stalwart_dungeons-nether_keeper","name":"Nether Keeper","mod":"Stalwart Dungeons","category":"stalwart","categoryLabel":"Stalwart Dungeons","tier":3,"order":280,"danger":"extrême","location":"Keeping Castle du Nether","rewards":"Nether Brick, Ancient Fire","description":"Gardien d’un donjon de Stalwart Dungeons. La rencontre est liée à une structure du Nether ou de l’End. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Explore de nouveaux chunks et nettoie méthodiquement la structure avant d’ouvrir la salle du gardien.","solo":"Ne combats pas le boss avec les créatures du donjon encore actives autour de toi.","coop":"Sécurisez les couloirs, définissez un point de repli et gardez une personne chargée des ennemis secondaires.","image":"assets/bestiary_safe_portraits/stalwart_dungeons-nether_keeper.webp","bestiary":"bestiary.html#stalwart_dungeons-nether_keeper","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false,"gearTier":"Diamant optimisé / Netherite","recommendedPlayers":"3–4 joueurs","attacks":[{"name":"Frappe du gardien","cue":"Le Keeper arme une attaque lourde.","response":"Esquive latérale et punis la récupération.","danger":"extrême"},{"name":"Zone de feu","cue":"La salle se charge d’effets du Nether.","response":"Écarte le groupe et garde Résistance au feu.","danger":"élevé"},{"name":"Pression du château","cue":"Des ennemis secondaires arrivent des accès.","response":"Ferme ou contrôle les entrées.","danger":"moyen"}],"phases":[{"name":"Garde","summary":"Lire les attaques lourdes et la salle."},{"name":"Colère du Nether","summary":"Gérer le feu et les renforts."}],"equipment":["Armure diamant optimisée ou Netherite","Arme principale et arme secondaire","Protection adaptée à l’élément du boss","Backpack préparé pour un combat long"],"consumables":["Soins instantanés et régénération","Résistance ou effet élémentaire adapté","Nourriture et ressources de réparation"],"roles":[{"role":"Avant-garde","task":"Occuper le gardien loin des couloirs."},{"role":"Nettoyage","task":"Empêcher les créatures du donjon d’entrer dans l’arène."},{"role":"Soutien","task":"Garder le point de repli et les ressources communes."}],"mistakes":["Combattre sans Résistance au feu","Laisser les portes ouvertes","Allonger les combos"],"checklist":["Atteindre et sécuriser : Keeping Castle du Nether","Préparer : Armure diamant optimisée ou Netherite","Préparer : Arme principale et arme secondaire","Emporter : Soins instantanés et régénération","Définir la voie de repli et le point de récupération"]},{"id":"stalwart_dungeons-shelterer","name":"Shelterer","mod":"Stalwart Dungeons","category":"stalwart","categoryLabel":"Stalwart Dungeons","tier":3,"order":290,"danger":"extrême","location":"End Dungeon","rewards":"Void Crystal","description":"Gardien d’un donjon de Stalwart Dungeons. La rencontre est liée à une structure du Nether ou de l’End. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Explore de nouveaux chunks et nettoie méthodiquement la structure avant d’ouvrir la salle du gardien.","solo":"Ne combats pas le boss avec les créatures du donjon encore actives autour de toi.","coop":"Sécurisez les couloirs, définissez un point de repli et gardez une personne chargée des ennemis secondaires.","image":"assets/bestiary_safe_portraits/stalwart_dungeons-shelterer.webp","bestiary":"bestiary.html#stalwart_dungeons-shelterer","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false,"gearTier":"Diamant optimisé / Netherite","recommendedPlayers":"3–4 joueurs","attacks":[{"name":"Protection renforcée","cue":"Le Shelterer réduit les ouvertures frontales.","response":"Cherche les fenêtres et change d’angle.","danger":"tactique"},{"name":"Onde de l’End","cue":"Une énergie violette se concentre.","response":"Éloigne-toi et évite les bords.","danger":"élevé"},{"name":"Projectile de structure","cue":"Il vise à travers la salle.","response":"Utilise les piliers et garde une sortie.","danger":"élevé"}],"phases":[{"name":"Abri","summary":"Identifier les moments où les défenses tombent."},{"name":"Contre-attaque","summary":"Punir brièvement puis reprendre la couverture."}],"equipment":["Armure diamant optimisée ou Netherite","Arme principale et arme secondaire","Protection adaptée à l’élément du boss","Backpack préparé pour un combat long"],"consumables":["Soins instantanés et régénération","Résistance ou effet élémentaire adapté","Nourriture et ressources de réparation"],"roles":[{"role":"Avant-garde","task":"Occuper le gardien loin des couloirs."},{"role":"Nettoyage","task":"Empêcher les créatures du donjon d’entrer dans l’arène."},{"role":"Soutien","task":"Garder le point de repli et les ressources communes."}],"mistakes":["Frapper une défense active","Rester près du vide","Poursuivre hors couverture"],"checklist":["Atteindre et sécuriser : End Dungeon","Préparer : Armure diamant optimisée ou Netherite","Préparer : Arme principale et arme secondaire","Emporter : Soins instantanés et régénération","Définir la voie de repli et le point de récupération"]},{"id":"cataclysm-netherite_monstrosity","name":"Netherite Monstrosity","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":300,"danger":"extrême","location":"Soul Blacksmith du Nether","rewards":"Infernal Forge, Lava Power Cell, Monstrous Horn, Music Disc","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Évite la lave et les attaques de zone. Les fenêtres de dégâts sont courtes et très dangereuses.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-netherite_monstrosity.webp","bestiary":"bestiary.html#cataclysm-netherite_monstrosity","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false,"gearTier":"Netherite optimisée","recommendedPlayers":"3–4 joueurs","attacks":[{"name":"Marteau de lave","cue":"La Monstrosité lève son bras avant un impact lourd.","response":"Quitte l’axe et prépare l’onde de choc.","danger":"extrême"},{"name":"Projectiles de magma","cue":"Le boss canalise du feu à distance.","response":"Reste mobile et utilise les obstacles.","danger":"élevé"},{"name":"Régénération par la lave","cue":"Le boss reste proche d’une source de lave.","response":"Éloigne-le de la lave avant d’engager la phase de dégâts.","danger":"tactique"}],"phases":[{"name":"Forge","summary":"Contrôler sa position par rapport à la lave."},{"name":"Monstrosité active","summary":"Esquiver les impacts et concentrer les dégâts."}],"equipment":["Résistance au feu","Netherite optimisée","Arme mobile","Distance de secours"],"consumables":["Stock complet de soins","Résistance, force ou vitesse","Totems et nourriture premium"],"roles":[{"role":"Tank mobile","task":"Garder l’attention sans rester immobile."},{"role":"Dégâts coordonnés","task":"Concentrer les attaques pendant les récupérations."},{"role":"Secours","task":"Rester vivant pour relever le rythme après une erreur."}],"mistakes":["Le laisser dans la lave","Rester devant le marteau","Épuiser l’endurance sur son armure"],"checklist":["Atteindre et sécuriser : Soul Blacksmith du Nether","Préparer : Résistance au feu","Préparer : Netherite optimisée","Emporter : Stock complet de soins","Définir la voie de repli et le point de récupération","Confirmer les rôles de chaque joueur avant l’entrée"]},{"id":"cataclysm-ender_guardian","name":"Ender Guardian","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":310,"danger":"extrême","location":"Citadelle en ruine de l’End","rewards":"Gauntlet of Guard, Music Disc","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-ender_guardian.webp","bestiary":"bestiary.html#cataclysm-ender_guardian","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false,"gearTier":"Netherite optimisée","recommendedPlayers":"3–4 joueurs","attacks":[{"name":"Poing téléporté","cue":"Le Guardian disparaît ou change brutalement d’angle.","response":"Garde une esquive et évite les bords.","danger":"extrême"},{"name":"Runes du vide","cue":"Des marques violettes apparaissent au sol.","response":"Quitte la zone avant l’activation.","danger":"élevé"},{"name":"Bouclier de l’End","cue":"Les attaques frontales deviennent inefficaces.","response":"Attends la fin de la séquence et change d’angle.","danger":"tactique"}],"phases":[{"name":"Gardien","summary":"Lecture du bouclier et des téléportations."},{"name":"Rupture de l’End","summary":"Survie aux runes et aux attaques rapides."}],"equipment":["Armure Netherite fortement enchantée","Build de compétences cohérent","Arme endgame avec mobilité","Option de repli et équipement de secours"],"consumables":["Stock complet de soins","Résistance, force ou vitesse","Totems et nourriture premium"],"roles":[{"role":"Tank mobile","task":"Garder l’attention sans rester immobile."},{"role":"Dégâts coordonnés","task":"Concentrer les attaques pendant les récupérations."},{"role":"Secours","task":"Rester vivant pour relever le rythme après une erreur."}],"mistakes":["Rester près du vide","Frapper le bouclier","Garder toute l’équipe groupée"],"checklist":["Atteindre et sécuriser : Citadelle en ruine de l’End","Préparer : Armure Netherite fortement enchantée","Préparer : Build de compétences cohérent","Emporter : Stock complet de soins","Définir la voie de repli et le point de récupération","Confirmer les rôles de chaque joueur avant l’entrée"]},{"id":"cataclysm-ignis","name":"Ignis","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":320,"danger":"extrême","location":"Burning Arena du Nether","rewards":"Ignitium Ingot, Music Disc","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Apprends les enchaînements plutôt que de forcer les dégâts. Le bouclier et l’esquive doivent être synchronisés.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-ignis.webp","bestiary":"bestiary.html#cataclysm-ignis","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false,"gearTier":"Netherite optimisée","recommendedPlayers":"3–5 joueurs","attacks":[{"name":"Combo d’épée","cue":"Ignis arme une série longue et très mobile.","response":"Évite toute la séquence avant de frapper.","danger":"ultime"},{"name":"Bouclier et contre","cue":"Il se protège et attend une attaque.","response":"Arrête le spam et change de rythme.","danger":"extrême"},{"name":"Vague de feu","cue":"Le sol et l’arène s’embrasent.","response":"Écarte le groupe et garde Résistance au feu.","danger":"extrême"}],"phases":[{"name":"Duel du chevalier","summary":"Lire le bouclier et les combos."},{"name":"Arène en feu","summary":"Priorité à la survie et aux fenêtres courtes."}],"equipment":["Netherite optimisée","Résistance au feu","Totems","Arme avec excellente mobilité"],"consumables":["Stock complet de soins","Résistance, force ou vitesse","Totems et nourriture premium"],"roles":[{"role":"Tank mobile","task":"Garder l’attention sans rester immobile."},{"role":"Dégâts coordonnés","task":"Concentrer les attaques pendant les récupérations."},{"role":"Secours","task":"Rester vivant pour relever le rythme après une erreur."}],"mistakes":["Spam sur le bouclier","Rester dans le feu","Chercher un combo trop long"],"checklist":["Atteindre et sécuriser : Burning Arena du Nether","Préparer : Netherite optimisée","Préparer : Résistance au feu","Emporter : Stock complet de soins","Définir la voie de repli et le point de récupération","Confirmer les rôles de chaque joueur avant l’entrée"]},{"id":"cataclysm-the_harbinger","name":"The Harbinger","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":330,"danger":"extrême","location":"Ancient Factory","rewards":"Music Disc, Block of Witherite","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-the_harbinger.webp","bestiary":"bestiary.html#cataclysm-the_harbinger","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false,"gearTier":"Netherite optimisée","recommendedPlayers":"3–5 joueurs","attacks":[{"name":"Barrage de missiles","cue":"Plusieurs marqueurs ou projectiles apparaissent.","response":"Cours en courbe et ne traverse pas le groupe.","danger":"extrême"},{"name":"Rayon de l’usine","cue":"Le Harbinger canalise une ligne d’énergie.","response":"Coupe l’axe immédiatement.","danger":"ultime"},{"name":"Bombardement de zone","cue":"L’arène est couverte de zones dangereuses.","response":"Survis au motif avant de reprendre les dégâts.","danger":"extrême"}],"phases":[{"name":"Acquisition","summary":"Lire les ciblages et conserver l’espace."},{"name":"Bombardement","summary":"Mobilité totale et dégâts uniquement après le motif."}],"equipment":["Armure Netherite fortement enchantée","Build de compétences cohérent","Arme endgame avec mobilité","Option de repli et équipement de secours"],"consumables":["Stock complet de soins","Résistance, force ou vitesse","Totems et nourriture premium"],"roles":[{"role":"Tank mobile","task":"Garder l’attention sans rester immobile."},{"role":"Dégâts coordonnés","task":"Concentrer les attaques pendant les récupérations."},{"role":"Secours","task":"Rester vivant pour relever le rythme après une erreur."}],"mistakes":["Se croiser pendant les missiles","Rester immobile","Attaquer pendant le bombardement"],"checklist":["Atteindre et sécuriser : Ancient Factory","Préparer : Armure Netherite fortement enchantée","Préparer : Build de compétences cohérent","Emporter : Stock complet de soins","Définir la voie de repli et le point de récupération","Confirmer les rôles de chaque joueur avant l’entrée"]},{"id":"cataclysm-ancient_remnant","name":"Ancient Remnant","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":340,"danger":"extrême","location":"Cursed Pyramid et déserts","rewards":"Block of Ancient Metal, Music Disc, Remnant's Skull, Sandstorm in a Bottle","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-ancient_remnant.webp","bestiary":"bestiary.html#cataclysm-ancient_remnant","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false,"gearTier":"Netherite optimisée","recommendedPlayers":"3–5 joueurs","attacks":[{"name":"Charge du désert","cue":"Le Remnant s’aligne et prend de l’élan.","response":"Esquive tardivement sur le côté.","danger":"extrême"},{"name":"Balayage de queue","cue":"Le corps pivote largement.","response":"Éloigne-toi de ses flancs.","danger":"élevé"},{"name":"Rupture du sable","cue":"Le sol de l’arène se soulève ou se marque.","response":"Quitte la zone avant l’impact.","danger":"extrême"}],"phases":[{"name":"Prédateur ancien","summary":"Gérer les charges et les flancs."},{"name":"Colère du désert","summary":"Survivre aux ruptures de terrain."}],"equipment":["Armure Netherite fortement enchantée","Build de compétences cohérent","Arme endgame avec mobilité","Option de repli et équipement de secours"],"consumables":["Stock complet de soins","Résistance, force ou vitesse","Totems et nourriture premium"],"roles":[{"role":"Tank mobile","task":"Garder l’attention sans rester immobile."},{"role":"Dégâts coordonnés","task":"Concentrer les attaques pendant les récupérations."},{"role":"Secours","task":"Rester vivant pour relever le rythme après une erreur."}],"mistakes":["Rester sur ses flancs","Reculer en ligne droite","Combattre sans espace"],"checklist":["Atteindre et sécuriser : Cursed Pyramid et déserts","Préparer : Armure Netherite fortement enchantée","Préparer : Build de compétences cohérent","Emporter : Stock complet de soins","Définir la voie de repli et le point de récupération","Confirmer les rôles de chaque joueur avant l’entrée"]},{"id":"cataclysm-maledictus","name":"Maledictus","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":350,"danger":"extrême","location":"Frosted Prison et ruines nordiques","rewards":"Cursium Ingot, Music Disc","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-maledictus.webp","bestiary":"bestiary.html#cataclysm-maledictus","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false,"gearTier":"Netherite optimisée","recommendedPlayers":"3–5 joueurs","attacks":[{"name":"Combo de hallebarde","cue":"Maledictus arme une séquence de mêlée.","response":"Évite la série complète avant de répondre.","danger":"ultime"},{"name":"Onde maudite","cue":"Une énergie sombre se concentre autour de l’arme.","response":"Quitte l’axe et garde une distance sûre.","danger":"extrême"},{"name":"Assaut spectral","cue":"Le boss change brutalement de position.","response":"Reste mobile et protège les joueurs fragiles.","danger":"extrême"}],"phases":[{"name":"Chevalier maudit","summary":"Lecture des combos et des déplacements."},{"name":"Malédiction libérée","summary":"Pression de zone et mobilité accrue."}],"equipment":["Armure Netherite fortement enchantée","Build de compétences cohérent","Arme endgame avec mobilité","Option de repli et équipement de secours"],"consumables":["Stock complet de soins","Résistance, force ou vitesse","Totems et nourriture premium"],"roles":[{"role":"Tank mobile","task":"Garder l’attention sans rester immobile."},{"role":"Dégâts coordonnés","task":"Concentrer les attaques pendant les récupérations."},{"role":"Secours","task":"Rester vivant pour relever le rythme après une erreur."}],"mistakes":["Contre-attaquer au milieu du combo","Rester groupés","Négliger les effets négatifs"],"checklist":["Atteindre et sécuriser : Frosted Prison et ruines nordiques","Préparer : Armure Netherite fortement enchantée","Préparer : Build de compétences cohérent","Emporter : Stock complet de soins","Définir la voie de repli et le point de récupération","Confirmer les rôles de chaque joueur avant l’entrée"]},{"id":"cataclysm-the_leviathan","name":"The Leviathan","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":360,"danger":"extrême","location":"Sunken City et océans profonds","rewards":"Abyssal Egg, Music Disc, Tidal Claws","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Prépare respiration aquatique, mobilité sous-marine et résistance. Le combat hors de l’eau ne fonctionne pas normalement.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-the_leviathan.webp","bestiary":"bestiary.html#cataclysm-the_leviathan","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false,"gearTier":"Netherite optimisée","recommendedPlayers":"4–5 joueurs","attacks":[{"name":"Morsure abyssale","cue":"Le Léviathan se place dans l’axe d’une cible.","response":"Change de profondeur et quitte sa trajectoire.","danger":"ultime"},{"name":"Rayon abyssal","cue":"Une énergie sombre se canalise.","response":"Coupe la ligne et utilise la structure.","danger":"ultime"},{"name":"Contrôle de l’arène","cue":"Des zones ou portails dangereux apparaissent.","response":"Écarte le groupe et garde un chemin vers l’air.","danger":"extrême"}],"phases":[{"name":"Profondeurs","summary":"Maintenir respiration, visibilité et position."},{"name":"Abysses ouvertes","summary":"Survie aux rayons et aux zones de contrôle."}],"equipment":["Respiration aquatique","Netherite optimisée","Mobilité sous-marine","Arme à distance"],"consumables":["Respiration aquatique","Vision nocturne","Soins et régénération"],"roles":[{"role":"Tank mobile","task":"Garder l’attention sans rester immobile."},{"role":"Dégâts coordonnés","task":"Concentrer les attaques pendant les récupérations."},{"role":"Secours","task":"Rester vivant pour relever le rythme après une erreur."}],"mistakes":["Perdre la route vers l’air","Se regrouper","Poursuivre dans l’axe du rayon"],"checklist":["Atteindre et sécuriser : Sunken City et océans profonds","Préparer : Respiration aquatique","Préparer : Netherite optimisée","Emporter : Respiration aquatique","Définir la voie de repli et le point de récupération","Confirmer les rôles de chaque joueur avant l’entrée"]},{"id":"cataclysm-scylla","name":"Scylla","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":370,"danger":"extrême","location":"Acropolis et zones marines associées","rewards":"Essence of the Storm, Lacrima, Music Disc","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-scylla.webp","bestiary":"bestiary.html#cataclysm-scylla","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false,"gearTier":"Netherite optimisée","recommendedPlayers":"4–5 joueurs","attacks":[{"name":"Assaut marin","cue":"Scylla change rapidement de position autour de la cible.","response":"Garde le centre de l’arène et une esquive.","danger":"extrême"},{"name":"Décharge de zone","cue":"L’eau ou le sol se chargent d’énergie.","response":"Quitte immédiatement la zone marquée.","danger":"ultime"},{"name":"Enchaînement de trident","cue":"Une série d’attaques directionnelles commence.","response":"Évite toute la série avant de reprendre les dégâts.","danger":"extrême"}],"phases":[{"name":"Chasse marine","summary":"Lecture des déplacements rapides."},{"name":"Tempête de l’Acropole","summary":"Survie aux zones et aux séries d’attaques."}],"equipment":["Armure Netherite fortement enchantée","Build de compétences cohérent","Arme endgame avec mobilité","Option de repli et équipement de secours"],"consumables":["Stock complet de soins","Résistance, force ou vitesse","Totems et nourriture premium"],"roles":[{"role":"Tank mobile","task":"Garder l’attention sans rester immobile."},{"role":"Dégâts coordonnés","task":"Concentrer les attaques pendant les récupérations."},{"role":"Secours","task":"Rester vivant pour relever le rythme après une erreur."}],"mistakes":["Rester au bord de l’arène","Allonger les combos","Se regrouper dans les zones"],"checklist":["Atteindre et sécuriser : Acropolis et zones marines associées","Préparer : Armure Netherite fortement enchantée","Préparer : Build de compétences cohérent","Emporter : Stock complet de soins","Définir la voie de repli et le point de récupération","Confirmer les rôles de chaque joueur avant l’entrée"]},{"id":"minecraft-wither","name":"Wither","mod":"Minecraft","category":"vanilla","categoryLabel":"Minecraft","tier":5,"order":400,"danger":"extrême","location":"Invoqué avec sable des âmes et crânes de Wither","rewards":"Étoile du Nether","description":"Wither est une rencontre majeure de Minecraft. Dans ASCENSION, Epic Fight et les systèmes de progression peuvent rendre ce combat plus exigeant.","tip":"Combat à distance au début, puis mêlée sous 50 % de vie. Prépare du lait et un terrain contrôlé.","preparation":"Prépare l’expédition vers : Invoqué avec sable des âmes et crânes de Wither. Vérifie l’équipement avant d’activer ou d’approcher la rencontre.","solo":"Conserve une route de fuite et utilise le terrain plutôt que de rester immobile.","coop":"Répartissez nourriture, soins et outils de secours entre plusieurs joueurs.","image":"assets/ascension_logo_final.png","bestiary":"bestiary.html#minecraft-wither","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false,"wikiApi":"https://minecraft.wiki/api.php","wikiTitle":"Wither","gearTier":"Build endgame complet","recommendedPlayers":"2–4 joueurs","attacks":[{"name":"Explosion d’invocation","cue":"Le Wither se charge après sa création.","response":"Invoque-le dans une zone préparée et éloigne-toi.","danger":"extrême"},{"name":"Crânes de Wither","cue":"Les têtes suivent plusieurs cibles.","response":"Utilise le terrain et évite de croiser les alliés.","danger":"élevé"},{"name":"Armure de mêlée","cue":"À faible santé, les projectiles deviennent moins utiles.","response":"Passe à la mêlée coordonnée sans perdre la mobilité.","danger":"élevé"}],"phases":[{"name":"Vol et projectiles","summary":"Limiter les dégâts de terrain et maintenir la distance."},{"name":"Armure du Wither","summary":"Mêlée coordonnée et soins rapides."}],"equipment":["Armure endgame entièrement réparée","Arme principale au niveau maximal disponible","Arme de secours et solution à distance","Compétences et accessoires spécialisés"],"consumables":["Soins, régénération et résistance","Totems ou mécanismes de seconde chance","Ressources pour plusieurs tentatives"],"roles":[{"role":"Avant-garde","task":"Garder l’attention sans bloquer les alliés."},{"role":"Distance","task":"Maintenir les dégâts pendant les fenêtres sûres."},{"role":"Soutien","task":"Surveiller soins, terrain et voie de repli."}],"mistakes":["L’invoquer près de la base","Se disperser","Attendre trop longtemps pour soigner l’effet Wither"],"checklist":["Atteindre et sécuriser : Invoqué avec sable des âmes et crânes de Wither","Préparer : Armure endgame entièrement réparée","Préparer : Arme principale au niveau maximal disponible","Emporter : Soins, régénération et résistance","Définir la voie de repli et le point de récupération"]},{"id":"minecraft-ender_dragon","name":"Ender Dragon","mod":"Minecraft","category":"vanilla","categoryLabel":"Minecraft","tier":5,"order":410,"danger":"extrême","location":"Île centrale de l’End","rewards":"Expérience, portail de sortie, œuf la première fois","description":"Ender Dragon est une rencontre majeure de Minecraft. Dans ASCENSION, Epic Fight et les systèmes de progression peuvent rendre ce combat plus exigeant.","tip":"Détruis les cristaux avant le corps-à-corps et coordonne l’eau, les arcs et les lits avec prudence.","preparation":"Prépare l’expédition vers : Île centrale de l’End. Vérifie l’équipement avant d’activer ou d’approcher la rencontre.","solo":"Conserve une route de fuite et utilise le terrain plutôt que de rester immobile.","coop":"Répartissez nourriture, soins et outils de secours entre plusieurs joueurs.","image":"assets/ascension_logo_final.png","bestiary":"bestiary.html#minecraft-ender_dragon","quest":"quests.html#boss_hunt","companyGoal":"company-proof-dragon","personalGoal":"","proofGoal":"","spoiler":false,"wikiApi":"https://minecraft.wiki/api.php","wikiTitle":"Ender Dragon","gearTier":"Build endgame complet","recommendedPlayers":"2–4 joueurs","attacks":[{"name":"Charge aérienne","cue":"Le Dragon descend dans l’axe d’un joueur.","response":"Décale-toi et évite le vide.","danger":"élevé"},{"name":"Souffle du Dragon","cue":"Un nuage violet reste au sol.","response":"Quitte immédiatement la zone et garde des bouteilles si utile.","danger":"élevé"},{"name":"Cristaux de l’End","cue":"Le Dragon récupère près d’un cristal actif.","response":"Détruis les cristaux avant la phase de dégâts principale.","danger":"tactique"}],"phases":[{"name":"Cristaux","summary":"Sécuriser les tours et réduire la régénération."},{"name":"Vol","summary":"Distance, position et esquive des charges."},{"name":"Perchoir","summary":"Concentrer les dégâts sans rester devant la tête."}],"equipment":["Chute lente","Arc puissant","Blocs et perles","Citrouille optionnelle"],"consumables":["Chute lente","Soins","Nourriture premium"],"roles":[{"role":"Avant-garde","task":"Garder l’attention sans bloquer les alliés."},{"role":"Distance","task":"Maintenir les dégâts pendant les fenêtres sûres."},{"role":"Soutien","task":"Surveiller soins, terrain et voie de repli."}],"mistakes":["Rester dans le souffle","Oublier les cristaux","Se placer devant la tête au perchoir"],"checklist":["Atteindre et sécuriser : Île centrale de l’End","Préparer : Chute lente","Préparer : Arc puissant","Emporter : Chute lente","Définir la voie de repli et le point de récupération"]},{"id":"wom-lupus_rex","name":"Lupus Aureum","mod":"Weapons of Miracles","category":"endgame","categoryLabel":"Endgame","tier":5,"order":420,"danger":"extrême","location":"Taïgas anciennes de pins ou d’épicéas","rewards":"Butin géré par le mod; vérifier JEI et la table de butin en jeu","description":"Ennemi de Weapons of Miracles, conçu pour exploiter les mouvements et compétences d’Epic Fight. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Considère cette rencontre comme un objectif de fin de progression et prépare un équipement complet.","solo":"N’engage pas tant que les réparations, consommables et moyens de retour ne sont pas prêts.","coop":"Définissez les rôles avant le combat et gardez une réserve de ressources commune.","image":"assets/bestiary_safe_portraits/wom-lupus_rex.webp","bestiary":"bestiary.html#wom-lupus_rex","quest":"quests.html#roi_de_cendres","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false,"gearTier":"Build endgame complet","recommendedPlayers":"3–5 joueurs","attacks":[{"name":"Charge du prédateur","cue":"Lupus Aureum fixe une cible et accélère.","response":"Évite latéralement et ne traverse pas le groupe.","danger":"extrême"},{"name":"Combo de griffes","cue":"Une série rapide commence au contact.","response":"Romps le contact avant de contre-attaquer.","danger":"extrême"},{"name":"Pression de chasse","cue":"Le boss réduit rapidement la distance.","response":"Alternez l’attention et gardez de l’endurance.","danger":"élevé"}],"phases":[{"name":"Traque","summary":"Conserver l’espace dans la taïga."},{"name":"Frénésie dorée","summary":"Fenêtres plus courtes et pression rapprochée."}],"equipment":["Armure endgame entièrement réparée","Arme principale au niveau maximal disponible","Arme de secours et solution à distance","Compétences et accessoires spécialisés"],"consumables":["Soins, régénération et résistance","Totems ou mécanismes de seconde chance","Ressources pour plusieurs tentatives"],"roles":[{"role":"Avant-garde","task":"Fixer la cible et préserver les autres rôles."},{"role":"Dégâts","task":"Exploiter les fenêtres avec le build principal."},{"role":"Soutien","task":"Gérer les consommables et le plan de récupération."}],"mistakes":["Courir en ligne droite","Combattre entre les arbres","Épuiser toute l’endurance"],"checklist":["Atteindre et sécuriser : Taïgas anciennes de pins ou d’épicéas","Préparer : Armure endgame entièrement réparée","Préparer : Arme principale au niveau maximal disponible","Emporter : Soins, régénération et résistance","Définir la voie de repli et le point de récupération"]},{"id":"vaelorn","name":"Vaelorn, Roi de Cendres","mod":"ASCENSION","category":"vaelorn","categoryLabel":"Final","tier":6,"order":999,"danger":"ultime","location":"Chapitre X — accès final de la campagne","rewards":"Preuve coopérative de Vaelorn et choix final irréversible","description":"Rencontre finale d’ASCENSION. Son contenu détaillé reste protégé tant que le mode spoilers n’est pas activé.","tip":"Rassemble toute la compagnie avant de lancer la rencontre.","preparation":"Termine le Registre, les Six Épreuves et vérifie que chaque joueur dispose de son équipement final.","solo":"La rencontre est conçue comme un sommet de progression. Ne lance pas le combat sans sauvegarde et ressources de secours.","coop":"Restez dans le rayon coopératif, annoncez les phases et confirmez le choix final avec toute la compagnie.","image":"assets/items/preuve_vaelorn.png","bestiary":"","quest":"quests.html#roi_de_cendres","companyGoal":"company-boss-vaelorn","personalGoal":"personal-participation-vaelorn","proofGoal":"","spoiler":true,"gearTier":"Équipement final","recommendedPlayers":"Compagnie complète","attacks":[{"name":"Cendre vive","cue":"Le sol et l’air se chargent de particules brûlantes.","response":"Écarte la compagnie et quitte les zones marquées.","danger":"ultime"},{"name":"Rupture du Voile","cue":"Une longue animation précède une attaque de zone.","response":"Interromps les dégâts et suis l’appel du groupe.","danger":"ultime"},{"name":"Verdict du Roi","cue":"Le rythme ralentit avant une séquence décisive.","response":"Regroupe les ressources et ne laisse personne isolé.","danger":"ultime"}],"phases":[{"name":"Le Roi de Cendres","summary":"Lecture des attaques et maintien du rayon coopératif."},{"name":"Le Voile se brise","summary":"Pression de zone et gestion des ressources communes."},{"name":"Le Dernier Miracle","summary":"Séquence finale et choix irréversible de la compagnie."}],"equipment":["Équipement final de chaque classe","Armes et accessoires entièrement réparés","Rôle coop défini avant l’entrée","Plan de récupération après un échec"],"consumables":["Toutes les réserves de soins prévues","Effets adaptés à chaque rôle","Ressources communes de secours"],"roles":[{"role":"Gardien","task":"Maintenir la ligne et protéger les joueurs fragiles."},{"role":"Exécuteur","task":"Concentrer les dégâts dans les fenêtres annoncées."},{"role":"Veilleur","task":"Surveiller rayon coopératif, soins et joueurs à terre."}],"mistakes":["Entrer sans toute la compagnie","Sortir du rayon coopératif","Valider la fin sans accord du groupe"],"checklist":["Atteindre et sécuriser : Chapitre X — accès final de la campagne","Préparer : Équipement final de chaque classe","Préparer : Armes et accessoires entièrement réparés","Emporter : Toutes les réserves de soins prévues","Définir la voie de repli et le point de récupération","Confirmer les rôles de chaque joueur avant l’entrée"]}];
const ADVENTURE_KEY = 'ascension.adventure.hybrid.v2';
const CODEX_KEY = 'ascension.bossCodex.v1';
const PORTRAIT_CACHE_KEY = 'ascension.bossPortraits.v1';
const PREPARATION_KEY = 'ascension.bossPreparation.v1';

const grid = document.getElementById('boss-codex-grid');
const emptyState = document.getElementById('boss-empty-state');
const searchInput = document.getElementById('boss-search-input');
const filters = [...document.querySelectorAll('[data-boss-filter]')];
const routeButtons = [...document.querySelectorAll('[data-route-filter]')];
const visibleCount = document.getElementById('boss-visible-count');
const totalBadge = document.getElementById('boss-total-badge');
const progressPercent = document.getElementById('boss-codex-percent');
const progressCount = document.getElementById('boss-codex-count');
const drawer = document.getElementById('boss-drawer');
const backdrop = document.getElementById('boss-drawer-backdrop');
const drawerContent = document.getElementById('boss-drawer-content');
const closeButton = document.getElementById('boss-drawer-close');
const previousButton = document.getElementById('boss-previous');
const nextButton = document.getElementById('boss-next');
const toast = document.getElementById('boss-codex-toast');

let activeFilter = 'all';
let activeBossId = '';
let visibleBosses = [...BOSSES];

function safeParse(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn(error);
    return fallback;
  }
}

let portraitCache = safeParse(PORTRAIT_CACHE_KEY, {});
let portraitLoading = false;

function portraitSource(boss) {
  return portraitCache[boss.id] || boss.image;
}

function savePortraitCache() {
  try {
    localStorage.setItem(
      PORTRAIT_CACHE_KEY,
      JSON.stringify(portraitCache)
    );
  } catch (error) {
    console.warn('Impossible de mémoriser les portraits vanilla.', error);
  }
}

function normalizeWikiTitle(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function updatePortraitElements(bossId, source) {
  document
    .querySelectorAll(`[data-boss-portrait="${CSS.escape(bossId)}"]`)
    .forEach(image => {
      image.src = source;
      image.dataset.remotePortrait = '1';
    });
}

function testPortraitUrl(source) {
  return new Promise(resolve => {
    const probe = new Image();
    probe.referrerPolicy = 'no-referrer';
    probe.onload = () => {
      resolve(
        probe.naturalWidth >= 80
        && probe.naturalHeight >= 80
      );
    };
    probe.onerror = () => resolve(false);
    probe.src = source;
  });
}

async function searchPortraitForBoss(boss) {
  try {
    const url =
      boss.wikiApi
      + '?action=query&format=json&origin=*'
      + '&generator=search&gsrnamespace=0&gsrlimit=5'
      + '&gsrsearch=' + encodeURIComponent(boss.wikiTitle)
      + '&prop=pageimages&piprop=thumbnail&pithumbsize=900';

    const response = await fetch(url);
    const payload = await response.json();
    const pages = Object.values(payload.query?.pages || {})
      .filter(page => page.thumbnail?.source);

    for (const page of pages) {
      if (await testPortraitUrl(page.thumbnail.source)) {
        return page.thumbnail.source;
      }
    }
  } catch (error) {
    console.warn(
      `Portrait distant introuvable pour ${boss.name}.`,
      error
    );
  }

  return '';
}

async function loadVanillaPortraits() {
  if (portraitLoading) return;

  const pending = BOSSES.filter(
    boss =>
      boss.wikiApi
      && boss.wikiTitle
      && !portraitCache[boss.id]
  );

  if (!pending.length) {
    BOSSES.forEach(boss => {
      if (portraitCache[boss.id]) {
        updatePortraitElements(
          boss.id,
          portraitCache[boss.id]
        );
      }
    });
    return;
  }

  portraitLoading = true;

  const groups = new Map();
  pending.forEach(boss => {
    if (!groups.has(boss.wikiApi)) {
      groups.set(boss.wikiApi, []);
    }
    groups.get(boss.wikiApi).push(boss);
  });

  try {
    for (const [api, group] of groups) {
      const titles = group.map(boss => boss.wikiTitle);
      const url =
        api
        + '?action=query&format=json&origin=*&redirects=1'
        + '&prop=pageimages&piprop=thumbnail&pithumbsize=900'
        + '&titles=' + encodeURIComponent(titles.join('|'));

      let payload = null;

      try {
        const response = await fetch(url);
        payload = await response.json();
      } catch (error) {
        console.warn('Chargement groupé des portraits impossible.', error);
      }

      const wanted = new Map(
        group.map(boss => [
          normalizeWikiTitle(boss.wikiTitle),
          boss,
        ])
      );
      const aliases = new Map();

      (payload?.query?.normalized || []).forEach(item => {
        aliases.set(
          normalizeWikiTitle(item.to),
          normalizeWikiTitle(item.from)
        );
      });

      (payload?.query?.redirects || []).forEach(item => {
        aliases.set(
          normalizeWikiTitle(item.to),
          normalizeWikiTitle(item.from)
        );
      });

      const resolved = new Set();

      for (const page of Object.values(payload?.query?.pages || {})) {
        if (!page.thumbnail?.source) continue;

        let key = normalizeWikiTitle(page.title);
        let boss = wanted.get(key);

        if (!boss) {
          const original = aliases.get(key);
          if (original) boss = wanted.get(original);
        }

        if (
          boss
          && await testPortraitUrl(page.thumbnail.source)
        ) {
          portraitCache[boss.id] = page.thumbnail.source;
          updatePortraitElements(
            boss.id,
            page.thumbnail.source
          );
          resolved.add(boss.id);
        }
      }

      for (const boss of group) {
        if (resolved.has(boss.id)) continue;

        const source = await searchPortraitForBoss(boss);
        if (!source) continue;

        portraitCache[boss.id] = source;
        updatePortraitElements(boss.id, source);
      }
    }

    savePortraitCache();
  } finally {
    portraitLoading = false;
  }
}

function adventureState() {
  return safeParse(ADVENTURE_KEY, {
    profile: {spoilers:false},
    personal: {completed:[]},
    company: {completed:[]}
  });
}

function codexState() {
  return safeParse(CODEX_KEY, {defeated:[]});
}

function preparationState() {
  return safeParse(PREPARATION_KEY, {checked:{}});
}

function savePreparationState(state) {
  localStorage.setItem(PREPARATION_KEY, JSON.stringify(state));
}

function checkedPreparationItems(bossId) {
  const state = preparationState();
  return Array.isArray(state.checked?.[bossId])
    ? state.checked[bossId]
    : [];
}

function preparationProgress(boss) {
  const checked = checkedPreparationItems(boss.id);
  return {
    checked: checked.length,
    total: boss.checklist.length,
    percent: boss.checklist.length
      ? Math.round(checked.length / boss.checklist.length * 100)
      : 0
  };
}

function togglePreparationItem(boss, index, enabled) {
  const state = preparationState();
  state.checked = state.checked || {};
  const current = new Set(
    Array.isArray(state.checked[boss.id])
      ? state.checked[boss.id]
      : []
  );

  enabled ? current.add(index) : current.delete(index);
  state.checked[boss.id] = [...current].sort((a,b) => a-b);
  savePreparationState(state);
}

function resetPreparation(boss) {
  const state = preparationState();
  state.checked = state.checked || {};
  delete state.checked[boss.id];
  savePreparationState(state);
}

function listMarkup(items, className = '') {
  return `<ul class="${className}">${
    items.map(item => `<li>${escapeHtml(item)}</li>`).join('')
  }</ul>`;
}

function attacksMarkup(attacks) {
  return attacks.map((attack,index) => `
    <article class="boss-attack-card danger-${escapeHtml(attack.danger)}">
      <div class="boss-attack-index">${index + 1}</div>
      <div>
        <div class="boss-attack-heading">
          <h4>${escapeHtml(attack.name)}</h4>
          <span>${escapeHtml(attack.danger)}</span>
        </div>
        <p><strong>Signal :</strong> ${escapeHtml(attack.cue)}</p>
        <p><strong>Réponse :</strong> ${escapeHtml(attack.response)}</p>
      </div>
    </article>
  `).join('');
}

function phasesMarkup(phases) {
  return phases.map((phase,index) => `
    <article class="boss-phase-card">
      <span>${index + 1}</span>
      <div>
        <h4>${escapeHtml(phase.name)}</h4>
        <p>${escapeHtml(phase.summary)}</p>
      </div>
    </article>
  `).join('');
}

function rolesMarkup(roles) {
  return roles.map(role => `
    <article class="boss-role-card">
      <strong>${escapeHtml(role.role)}</strong>
      <p>${escapeHtml(role.task)}</p>
    </article>
  `).join('');
}

function preparationMarkup(boss) {
  const checked = new Set(checkedPreparationItems(boss.id));
  const progress = preparationProgress(boss);

  return `
    <div class="boss-prep-heading">
      <div>
        <p class="page-kicker">Checklist sauvegardée</p>
        <h3>Prêt pour le combat ?</h3>
      </div>
      <strong>${progress.checked} / ${progress.total}</strong>
    </div>
    <div class="boss-prep-progress">
      <span style="width:${progress.percent}%"></span>
    </div>
    <div class="boss-prep-list">
      ${boss.checklist.map((item,index) => `
        <label class="boss-prep-item">
          <input
            type="checkbox"
            data-boss-prep="${index}"
            ${checked.has(index) ? 'checked' : ''}
          >
          <span></span>
          <b>${escapeHtml(item)}</b>
        </label>
      `).join('')}
    </div>
    <button class="boss-prep-reset" id="boss-prep-reset" type="button">
      Réinitialiser cette checklist
    </button>
  `;
}

function setBossTab(tabName) {
  document.querySelectorAll('[data-boss-tab]').forEach(button => {
    const active = button.dataset.bossTab === tabName;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });

  document.querySelectorAll('[data-boss-panel]').forEach(panel => {
    panel.hidden = panel.dataset.bossPanel !== tabName;
  });
}

function saveCodex(state) {
  localStorage.setItem(CODEX_KEY, JSON.stringify(state));
}

function unique(list) {
  return [...new Set(Array.isArray(list) ? list : [])];
}

function completedLists() {
  const state = adventureState();
  return {
    spoilers: Boolean(state.profile?.spoilers),
    personal: unique(state.personal?.completed),
    company: unique(state.company?.completed)
  };
}

function bossStatus(boss) {
  const lists = completedLists();
  const manual = codexState().defeated.includes(boss.id);
  const company = boss.companyGoal && lists.company.includes(boss.companyGoal);
  const personal = boss.personalGoal && lists.personal.includes(boss.personalGoal);
  const proof = boss.proofGoal && lists.company.includes(boss.proofGoal);

  return {
    defeated: Boolean(manual || company),
    participated: Boolean(personal),
    proof: Boolean(proof),
    spoilers: lists.spoilers
  };
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#039;');
}

function normalize(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .toLowerCase();
}

function tierLabel(tier) {
  return {
    1:'Préparation',
    2:'Progression',
    3:'Expert',
    4:'Extrême',
    5:'Endgame',
    6:'Ultime'
  }[tier] || 'Expert';
}

function statusMarkup(boss, status) {
  if (boss.spoiler && !status.spoilers) {
    return '<span class="boss-status spoiler">Spoiler masqué</span>';
  }
  if (status.defeated) {
    return '<span class="boss-status defeated">Vaincu</span>';
  }
  if (status.participated) {
    return '<span class="boss-status participated">Participation enregistrée</span>';
  }
  if (status.proof) {
    return '<span class="boss-status proof">Preuve de catégorie obtenue</span>';
  }
  if (boss.companyGoal || boss.personalGoal) {
    return '<span class="boss-status synced">Synchronisable</span>';
  }
  return '<span class="boss-status manual">Suivi manuel</span>';
}

function cardMarkup(boss) {
  const status = bossStatus(boss);
  const locked = boss.spoiler && !status.spoilers;

  return `
    <article class="boss-codex-card ${status.defeated ? 'is-defeated' : ''} ${locked ? 'is-locked' : ''}" data-boss-id="${escapeHtml(boss.id)}">
      <button class="boss-card-open" type="button" aria-label="Ouvrir la fiche de ${escapeHtml(boss.name)}">
        <div class="boss-card-image">
          <img src="${escapeHtml(portraitSource(boss))}" data-boss-portrait="${escapeHtml(boss.id)}" alt="${locked ? 'Rencontre finale masquée' : escapeHtml(boss.name)}" loading="lazy" referrerpolicy="no-referrer">
          <span class="boss-tier tier-${boss.tier}">${tierLabel(boss.tier)}</span>
          ${locked ? '<span class="boss-lock-icon">◆</span>' : ''}
        </div>
        <div class="boss-card-body">
          <div class="boss-card-heading">
            <div>
              <p>${escapeHtml(boss.categoryLabel)}</p>
              <h2>${locked ? 'Rencontre finale masquée' : escapeHtml(boss.name)}</h2>
            </div>
            <span class="boss-card-order">${String(boss.order).padStart(3,'0')}</span>
          </div>
          <p class="boss-card-location">${locked ? 'Active le mode spoilers dans Mon aventure.' : escapeHtml(boss.location)}</p>
          <div class="boss-card-metrics">
            <span><b>⚔</b>${escapeHtml(boss.gearTier)}</span>
            <span><b>♟</b>${escapeHtml(boss.recommendedPlayers)}</span>
          </div>
          <div class="boss-card-footer">
            ${statusMarkup(boss,status)}
            <span class="boss-card-arrow">Ouvrir →</span>
          </div>
        </div>
      </button>
    </article>
  `;
}

function matchesRoute(boss, route) {
  if (route === 'expeditions') {
    return ['mowzie','aquamirae','stalwart'].includes(boss.category);
  }
  if (route === 'vanilla') {
    return ['vanilla','other'].includes(boss.category) && boss.tier <= 1;
  }
  return boss.category === route;
}

function applyFilters() {
  const query = normalize(searchInput.value);
  visibleBosses = BOSSES.filter(boss => {
    const categoryMatch = activeFilter === 'all'
      || boss.category === activeFilter
      || (activeFilter === 'endgame' && ['endgame','vaelorn'].includes(boss.category));

    const haystack = normalize([
      boss.name,
      boss.mod,
      boss.location,
      boss.categoryLabel,
      boss.rewards
    ].join(' '));

    return categoryMatch && (!query || haystack.includes(query));
  });

  grid.innerHTML = visibleBosses.map(cardMarkup).join('');
  visibleCount.textContent = String(visibleBosses.length);
  emptyState.hidden = visibleBosses.length !== 0;

  grid.querySelectorAll('[data-boss-id]').forEach(card => {
    card.querySelector('.boss-card-open').addEventListener('click',() => {
      openBoss(card.dataset.bossId);
    });
  });

  updateProgress();
  loadVanillaPortraits();
}

function setFilter(filter) {
  activeFilter = filter;
  filters.forEach(button => {
    const active = button.dataset.bossFilter === filter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  applyFilters();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('visible'), 2300);
}

function updateAdventureGoal(boss, defeated) {
  if (!boss.companyGoal && !boss.personalGoal) return;

  const state = adventureState();
  state.personal = state.personal || {completed:[]};
  state.company = state.company || {completed:[]};

  const personal = new Set(state.personal.completed || []);
  const company = new Set(state.company.completed || []);

  if (boss.companyGoal) {
    defeated ? company.add(boss.companyGoal) : company.delete(boss.companyGoal);
  }
  if (boss.personalGoal) {
    defeated ? personal.add(boss.personalGoal) : personal.delete(boss.personalGoal);
  }

  state.personal.completed = [...personal];
  state.company.completed = [...company];
  state.meta = {
    ...(state.meta || {}),
    updatedAt: new Date().toISOString(),
    source: 'boss-codex'
  };

  localStorage.setItem(ADVENTURE_KEY, JSON.stringify(state));
}

function toggleDefeated(boss) {
  const state = codexState();
  const defeated = new Set(state.defeated || []);
  const current = bossStatus(boss).defeated;

  if (current) {
    defeated.delete(boss.id);
    updateAdventureGoal(boss,false);
    showToast('Victoire retirée du suivi.');
  } else {
    defeated.add(boss.id);
    updateAdventureGoal(boss,true);
    showToast('Boss marqué comme vaincu.');
  }

  state.defeated = [...defeated];
  saveCodex(state);
  applyFilters();
  openBoss(boss.id);
}

function detailMarkup(boss) {
  const status = bossStatus(boss);
  const locked = boss.spoiler && !status.spoilers;

  if (locked) {
    return `
      <div class="boss-drawer-locked">
        <img src="${escapeHtml(boss.image)}" alt="">
        <p class="page-kicker">Spoiler majeur</p>
        <h2 id="boss-drawer-title">La rencontre finale est masquée</h2>
        <p>Active le mode spoilers dans <a href="adventure.html#company-ending">Mon aventure</a> pour consulter les phases et stratégies de Vaelorn.</p>
        <a class="button" href="adventure.html">Ouvrir Mon aventure</a>
      </div>
    `;
  }

  const buttonLabel = status.defeated
    ? 'Retirer la victoire'
    : 'Marquer comme vaincu';

  return `
    <div class="boss-drawer-hero">
      <img src="${escapeHtml(portraitSource(boss))}" data-boss-portrait="${escapeHtml(boss.id)}" alt="${escapeHtml(boss.name)}" referrerpolicy="no-referrer">
      <div>
        <p class="page-kicker">${escapeHtml(boss.categoryLabel)} · Palier ${boss.tier}</p>
        <h2 id="boss-drawer-title">${escapeHtml(boss.name)}</h2>
        <div class="chips">
          <span class="tag">${escapeHtml(boss.mod)}</span>
          <span class="tag">${escapeHtml(boss.danger)}</span>
          <span class="tag">${escapeHtml(boss.gearTier)}</span>
          <span class="tag">${escapeHtml(boss.recommendedPlayers)}</span>
        </div>
      </div>
    </div>

    <div class="boss-drawer-status">
      ${statusMarkup(boss,status)}
      <button class="button secondary" id="boss-toggle-defeated" type="button">${buttonLabel}</button>
    </div>

    <div class="boss-detail-tabs" role="tablist" aria-label="Sections de la stratégie">
      <button class="active" type="button" role="tab" aria-selected="true" data-boss-tab="overview">Aperçu</button>
      <button type="button" role="tab" aria-selected="false" data-boss-tab="attacks">Attaques</button>
      <button type="button" role="tab" aria-selected="false" data-boss-tab="preparation">Préparation</button>
      <button type="button" role="tab" aria-selected="false" data-boss-tab="strategy">Solo & coop</button>
    </div>

    <div class="boss-detail-panel" data-boss-panel="overview">
      <div class="boss-overview-metrics">
        <article><span>Équipement</span><strong>${escapeHtml(boss.gearTier)}</strong></article>
        <article><span>Groupe conseillé</span><strong>${escapeHtml(boss.recommendedPlayers)}</strong></article>
        <article><span>Attaques critiques</span><strong>${boss.attacks.length}</strong></article>
      </div>

      <section class="boss-detail-section">
        <h3>Localisation et accès</h3>
        <p>${escapeHtml(boss.location)}</p>
      </section>

      <section class="boss-detail-section">
        <h3>Phases du combat</h3>
        <div class="boss-phase-list">${phasesMarkup(boss.phases)}</div>
      </section>

      <section class="boss-detail-section">
        <h3>Butin important</h3>
        <p>${escapeHtml(boss.rewards)}</p>
      </section>

      <section class="boss-detail-section boss-detail-note">
        <h3>Conseil du Codex</h3>
        <p>${escapeHtml(boss.tip || boss.description)}</p>
      </section>
    </div>

    <div class="boss-detail-panel" data-boss-panel="attacks" hidden>
      <section class="boss-detail-section">
        <div class="boss-section-inline-heading">
          <div>
            <p class="page-kicker">Télégraphes et réponses</p>
            <h3>Attaques dangereuses</h3>
          </div>
          <span>${boss.attacks.length} motifs</span>
        </div>
        <div class="boss-attacks-list">${attacksMarkup(boss.attacks)}</div>
      </section>

      <section class="boss-detail-section boss-mistakes-section">
        <h3>Erreurs à éviter</h3>
        ${listMarkup(boss.mistakes,'boss-warning-list')}
      </section>
    </div>

    <div class="boss-detail-panel" data-boss-panel="preparation" hidden>
      <div class="boss-loadout-grid">
        <section class="boss-detail-section">
          <h3>Équipement conseillé</h3>
          ${listMarkup(boss.equipment,'boss-loadout-list')}
        </section>
        <section class="boss-detail-section">
          <h3>Consommables</h3>
          ${listMarkup(boss.consumables,'boss-loadout-list')}
        </section>
      </div>

      <section class="boss-detail-section boss-preparation-section">
        ${preparationMarkup(boss)}
      </section>
    </div>

    <div class="boss-detail-panel" data-boss-panel="strategy" hidden>
      <div class="boss-strategy-grid">
        <section class="boss-detail-section">
          <h3>Stratégie solo</h3>
          <p>${escapeHtml(boss.solo)}</p>
        </section>
        <section class="boss-detail-section">
          <h3>Stratégie coop</h3>
          <p>${escapeHtml(boss.coop)}</p>
        </section>
      </div>

      <section class="boss-detail-section">
        <h3>Composition coop recommandée</h3>
        <div class="boss-role-grid">${rolesMarkup(boss.roles)}</div>
      </section>
    </div>

    <div class="boss-drawer-links">
      <a class="button" href="${escapeHtml(boss.quest)}">Voir les quêtes</a>
      ${boss.bestiary ? `<a class="button secondary" href="${escapeHtml(boss.bestiary)}">Ouvrir le bestiaire</a>` : ''}
      <a class="button secondary" href="arsenal.html?boss=${escapeHtml(boss.id)}">Préparer l’équipement</a>
      <button class="button secondary" id="boss-copy-plan" type="button">Copier le plan</button>
    </div>
  `;
}

function openBoss(id) {
  const boss = BOSSES.find(item => item.id === id);
  if (!boss) return;

  activeBossId = id;
  drawerContent.innerHTML = detailMarkup(boss);
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden','false');
  backdrop.hidden = false;
  document.body.classList.add('boss-drawer-open');

  const toggle = document.getElementById('boss-toggle-defeated');
  if (toggle) toggle.addEventListener('click',() => toggleDefeated(boss));

  document.querySelectorAll('[data-boss-tab]').forEach(button => {
    button.addEventListener('click',() => {
      setBossTab(button.dataset.bossTab);
    });
  });

  document.querySelectorAll('[data-boss-prep]').forEach(input => {
    input.addEventListener('change',() => {
      togglePreparationItem(
        boss,
        Number(input.dataset.bossPrep),
        input.checked
      );
      openBoss(boss.id);
      setBossTab('preparation');
    });
  });

  const resetPrep = document.getElementById('boss-prep-reset');
  if (resetPrep) {
    resetPrep.addEventListener('click',() => {
      resetPreparation(boss);
      openBoss(boss.id);
      setBossTab('preparation');
      showToast('Checklist réinitialisée.');
    });
  }

  const copyPlan = document.getElementById('boss-copy-plan');
  if (copyPlan) {
    copyPlan.addEventListener('click',async() => {
      const plan = [
        boss.name,
        `Équipement : ${boss.gearTier}`,
        `Groupe : ${boss.recommendedPlayers}`,
        '',
        'Phases :',
        ...boss.phases.map((phase,index) =>
          `${index + 1}. ${phase.name} — ${phase.summary}`
        ),
        '',
        'Attaques :',
        ...boss.attacks.map((attack,index) =>
          `${index + 1}. ${attack.name} — ${attack.response}`
        ),
        '',
        'Solo :',
        boss.solo,
        '',
        'Coop :',
        boss.coop
      ].join('\n');

      try {
        await navigator.clipboard.writeText(plan);
        showToast('Plan du boss copié.');
      } catch (error) {
        console.warn(error);
        showToast('Copie impossible dans ce navigateur.');
      }
    });
  }

  setBossTab('overview');

  const index = BOSSES.findIndex(item => item.id === id);
  previousButton.disabled = index <= 0;
  nextButton.disabled = index >= BOSSES.length - 1;

  history.replaceState(null,'',`#${encodeURIComponent(id)}`);
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
  backdrop.hidden = true;
  document.body.classList.remove('boss-drawer-open');
  activeBossId = '';
}

function navigate(offset) {
  const index = BOSSES.findIndex(item => item.id === activeBossId);
  const target = BOSSES[index + offset];
  if (target) openBoss(target.id);
}

function updateProgress() {
  const defeated = BOSSES.filter(boss => bossStatus(boss).defeated).length;
  const percent = Math.round(defeated / BOSSES.length * 100);
  progressPercent.textContent = `${percent}%`;
  progressCount.textContent = `${defeated} / ${BOSSES.length} vaincus`;
  totalBadge.textContent = `${BOSSES.length} rencontres`;
}

filters.forEach(button => {
  button.addEventListener('click',() => setFilter(button.dataset.bossFilter));
});

routeButtons.forEach(button => {
  button.addEventListener('click',() => {
    const route = button.dataset.routeFilter;
    if (route === 'expeditions') {
      activeFilter = 'all';
      filters.forEach(item => item.classList.remove('active'));
      visibleBosses = BOSSES.filter(boss => matchesRoute(boss,route));
      grid.innerHTML = visibleBosses.map(cardMarkup).join('');
      visibleCount.textContent = String(visibleBosses.length);
      emptyState.hidden = visibleBosses.length !== 0;
      grid.querySelectorAll('[data-boss-id]').forEach(card => {
        card.querySelector('.boss-card-open').addEventListener('click',() => openBoss(card.dataset.bossId));
      });
      grid.scrollIntoView({behavior:'smooth',block:'start'});
      return;
    }
    setFilter(route);
    grid.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

searchInput.addEventListener('input',applyFilters);
closeButton.addEventListener('click',closeDrawer);
backdrop.addEventListener('click',closeDrawer);
previousButton.addEventListener('click',() => navigate(-1));
nextButton.addEventListener('click',() => navigate(1));
document.addEventListener('keydown',event => {
  if (event.key === 'Escape') closeDrawer();
  if (!drawer.classList.contains('open')) return;
  if (event.key === 'ArrowLeft') navigate(-1);
  if (event.key === 'ArrowRight') navigate(1);
});

applyFilters();

const initialHash = decodeURIComponent(location.hash.replace(/^#/,''));
if (initialHash && BOSSES.some(boss => boss.id === initialHash)) {
  openBoss(initialHash);
}
})();
