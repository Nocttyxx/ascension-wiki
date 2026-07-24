(() => {
'use strict';

const root = document.querySelector('[data-boss-codex]');
if (!root) return;

const BOSSES = [{"id":"minecraft-elder_guardian","name":"Grand gardien","mod":"Minecraft","category":"vanilla","categoryLabel":"Minecraft","tier":1,"order":10,"danger":"extrême","location":"Monuments océaniques","rewards":"Éponge humide, cristaux, poisson","description":"Grand gardien est une rencontre majeure de Minecraft. Dans ASCENSION, Epic Fight et les systèmes de progression peuvent rendre ce combat plus exigeant.","tip":"Apporte lait, portes ou potions aquatiques. La fatigue de minage rend l’exploration très lente.","preparation":"Prépare l’expédition vers : Monuments océaniques. Vérifie l’équipement avant d’activer ou d’approcher la rencontre.","solo":"Conserve une route de fuite et utilise le terrain plutôt que de rester immobile.","coop":"Répartissez nourriture, soins et outils de secours entre plusieurs joueurs.","image":"assets/ascension_logo_final.png","bestiary":"bestiary.html#minecraft-elder_guardian","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false},{"id":"minecraft-warden","name":"Warden","mod":"Minecraft","category":"vanilla","categoryLabel":"Minecraft","tier":1,"order":20,"danger":"extrême","location":"Deep Dark, invoqué par les hurleurs sculk","rewards":"Catalyseur de sculk; il vaut mieux l’éviter","description":"Warden est une rencontre majeure de Minecraft. Dans ASCENSION, Epic Fight et les systèmes de progression peuvent rendre ce combat plus exigeant.","tip":"Ne cherche pas le duel au début du pack. Marche accroupi, éloigne les vibrations et prépare une route de fuite.","preparation":"Prépare l’expédition vers : Deep Dark, invoqué par les hurleurs sculk. Vérifie l’équipement avant d’activer ou d’approcher la rencontre.","solo":"Conserve une route de fuite et utilise le terrain plutôt que de rester immobile.","coop":"Répartissez nourriture, soins et outils de secours entre plusieurs joueurs.","image":"assets/ascension_logo_final.png","bestiary":"bestiary.html#minecraft-warden","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false},{"id":"majruszsdifficulty-cerberus","name":"Cerbère","mod":"Majrusz's Progressive Difficulty","category":"other","categoryLabel":"Rencontres spéciales","tier":1,"order":30,"danger":"extrême","location":"Tous les biomes du Nether (très rare)","rewards":"Croc de Cerbère, Bone, Coal","description":"Créature ajoutée par la difficulté progressive. Sa présence augmente avec les systèmes de difficulté du monde. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Prépare un équipement complet et une voie de retraite.","solo":"Observe les attaques avant de chercher les dégâts.","coop":"Coordonnez les rôles et évitez de vous regrouper.","image":"assets/bestiary_safe_portraits/majruszsdifficulty-cerberus.webp","bestiary":"bestiary.html#majruszsdifficulty-cerberus","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false},{"id":"twilightforest-naga","name":"Nâga","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":100,"danger":"extrême","location":"Cour de la Naga dans la Forêt du Crépuscule","rewards":"Écailles de Nâga, Trophée de Nâga","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Tourne autour de l’arène et frappe les segments lorsqu’elle ralentit après une charge.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-naga.webp","bestiary":"bestiary.html#twilightforest-naga","quest":"quests.html#boss_hunt","companyGoal":"company-proof-naga","personalGoal":"","proofGoal":"","spoiler":false},{"id":"twilightforest-lich","name":"Lich","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":110,"danger":"extrême","location":"Tour de la Liche","rewards":"Bone, Ender Pearl, Golden Boots, Golden Chestplate, Golden Helmet, Golden Leggings, Golden Sword et 5 autre(s)","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Renvoie les projectiles pendant la première phase, puis élimine les clones et serviteurs.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-lich.webp","bestiary":"bestiary.html#twilightforest-lich","quest":"quests.html#boss_hunt","companyGoal":"company-boss-lich","personalGoal":"personal-participation-lich","proofGoal":"","spoiler":false},{"id":"twilightforest-minoshroom","name":"Minoshroom","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":120,"danger":"extrême","location":"Labyrinthe de la Forêt du Crépuscule","rewards":"Hache en diamant du Minotaure, Stroganoff de Meef, Minoshroom Trophy","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-minoshroom.webp","bestiary":"bestiary.html#twilightforest-minoshroom","quest":"quests.html#boss_hunt","companyGoal":"company-boss-minoshroom","personalGoal":"personal-participation-minoshroom","proofGoal":"","spoiler":false},{"id":"twilightforest-hydra","name":"Hydre","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":130,"danger":"extrême","location":"Repaire de l’Hydre dans le marais de feu","rewards":"Sang ardent, Tranche d'Hydre, Trophée d'Hydre","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Vise les têtes ouvertes après leurs attaques; les têtes fermées réduisent fortement les dégâts.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-hydra.webp","bestiary":"bestiary.html#twilightforest-hydra","quest":"quests.html#boss_hunt","companyGoal":"company-boss-hydra","personalGoal":"personal-participation-hydra","proofGoal":"","spoiler":false},{"id":"twilightforest-knight_phantom","name":"Chevalier fantôme","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":140,"danger":"extrême","location":"Forteresse des Chevaliers","rewards":"Butin géré par le mod; vérifier JEI et la table de butin en jeu","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-knight_phantom.webp","bestiary":"bestiary.html#twilightforest-knight_phantom","quest":"quests.html#boss_hunt","companyGoal":"company-boss-knight-phantom","personalGoal":"personal-participation-knight-phantom","proofGoal":"","spoiler":false},{"id":"twilightforest-ur_ghast","name":"Ur-Ghast","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":150,"danger":"extrême","location":"Tour sombre","rewards":"Carminite, Larmes ardentes, Trophée d'Ur-Ghast","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Utilise les pièges à Ghast de la tour et détruis les Carminites qui entretiennent le combat.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-ur_ghast.webp","bestiary":"bestiary.html#twilightforest-ur_ghast","quest":"quests.html#boss_hunt","companyGoal":"company-boss-ur-ghast","personalGoal":"personal-participation-ur-ghast","proofGoal":"","spoiler":false},{"id":"twilightforest-alpha_yeti","name":"Yéti Alpha","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":160,"danger":"extrême","location":"Forêt enneigée et tanière de l’Alpha Yeti","rewards":"Fourrure de Yéti Alpha, Alpha Yeti Trophy, Bombe glacée","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-alpha_yeti.webp","bestiary":"bestiary.html#twilightforest-alpha_yeti","quest":"quests.html#boss_hunt","companyGoal":"company-boss-alpha-yeti","personalGoal":"personal-participation-alpha-yeti","proofGoal":"","spoiler":false},{"id":"twilightforest-snow_queen","name":"Reine des Neiges","mod":"The Twilight Forest","category":"twilight","categoryLabel":"Twilight Forest","tier":2,"order":170,"danger":"extrême","location":"Palais d’Aurora","rewards":"Packed Ice, Snowball, Arc du chercheur, Trophée de la Reine des Neiges, Tri-Bow","description":"Créature native de la Forêt du Crépuscule, dimension structurée autour d’une progression de boss et de biomes magiques. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Respecte l’ordre de progression de la dimension et sécurise le trajet jusqu’à l’arène.","solo":"Observe une séquence complète avant de t’engager. Garde une sortie et évite de poursuivre le boss hors de sa zone.","coop":"Répartissez les rôles : un joueur attire l’attention, les autres gardent les angles et interviennent sans se regrouper.","image":"assets/bestiary_safe_portraits/twilightforest-snow_queen.webp","bestiary":"bestiary.html#twilightforest-snow_queen","quest":"quests.html#boss_hunt","companyGoal":"company-boss-snow-queen","personalGoal":"personal-participation-snow-queen","proofGoal":"","spoiler":false},{"id":"mowziesmobs-wroughtnaut","name":"Ferrous Wroughtnaut","mod":"Mowzie's Mobs","category":"mowzie","categoryLabel":"Mowzie’s Mobs","tier":3,"order":200,"danger":"extrême","location":"Chambre souterraine du Wroughtnaut","rewards":"Hache des milles métaux, Casque de Chevalier Forgé","description":"Créature animée et tactique de Mowzie’s Mobs. Ses attaques sont généralement très lisibles, mais sévèrement punissantes. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Attaque son point faible après ses grandes animations. Le frapper frontalement est rarement rentable.","preparation":"Prépare mobilité, nourriture et soins. Ces gardiens punissent fortement les attaques lancées sans observation.","solo":"Cherche les fenêtres après les grandes animations et évite les échanges de dégâts directs.","coop":"Alternez l’attention du boss et annoncez clairement ses longues animations.","image":"assets/bestiary_safe_portraits/mowziesmobs-wroughtnaut.webp","bestiary":"bestiary.html#mowziesmobs-wroughtnaut","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-mowzie","spoiler":false},{"id":"mowziesmobs-frostmaw","name":"Frostmaw","mod":"Mowzie's Mobs","category":"mowzie","categoryLabel":"Mowzie’s Mobs","tier":3,"order":210,"danger":"extrême","location":"Structure enneigée isolée","rewards":"Cristal de Glace, Music Disc","description":"Créature animée et tactique de Mowzie’s Mobs. Ses attaques sont généralement très lisibles, mais sévèrement punissantes. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Reste mobile et évite son souffle gelé. Ses fenêtres d’ouverture apparaissent après ses attaques lourdes.","preparation":"Prépare mobilité, nourriture et soins. Ces gardiens punissent fortement les attaques lancées sans observation.","solo":"Cherche les fenêtres après les grandes animations et évite les échanges de dégâts directs.","coop":"Alternez l’attention du boss et annoncez clairement ses longues animations.","image":"assets/bestiary_safe_portraits/mowziesmobs-frostmaw.webp","bestiary":"bestiary.html#mowziesmobs-frostmaw","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-mowzie","spoiler":false},{"id":"mowziesmobs-umvuthi","name":"Umvuthi, the Sunbird","mod":"Mowzie's Mobs","category":"mowzie","categoryLabel":"Mowzie’s Mobs","tier":3,"order":220,"danger":"extrême","location":"Bosquet d’Umvuthi dans les savanes","rewards":"Feather, Sol Visage","description":"Créature animée et tactique de Mowzie’s Mobs. Ses attaques sont généralement très lisibles, mais sévèrement punissantes. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Utilise le décor contre ses attaques solaires et élimine rapidement les soutiens Umvuthana.","preparation":"Prépare mobilité, nourriture et soins. Ces gardiens punissent fortement les attaques lancées sans observation.","solo":"Cherche les fenêtres après les grandes animations et évite les échanges de dégâts directs.","coop":"Alternez l’attention du boss et annoncez clairement ses longues animations.","image":"assets/bestiary_safe_portraits/mowziesmobs-umvuthi.webp","bestiary":"bestiary.html#mowziesmobs-umvuthi","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-mowzie","spoiler":false},{"id":"mowziesmobs-sculptor","name":"Tongbi, the Sculptor","mod":"Mowzie's Mobs","category":"mowzie","categoryLabel":"Mowzie’s Mobs","tier":3,"order":230,"danger":"extrême","location":"Monastère en montagne","rewards":"Geomancer Beads, Geomancer Belt, Geomancer Robe, Geomancer Sandals, Geomancer Staff","description":"Créature animée et tactique de Mowzie’s Mobs. Ses attaques sont généralement très lisibles, mais sévèrement punissantes. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Prépare mobilité, nourriture et soins. Ces gardiens punissent fortement les attaques lancées sans observation.","solo":"Cherche les fenêtres après les grandes animations et évite les échanges de dégâts directs.","coop":"Alternez l’attention du boss et annoncez clairement ses longues animations.","image":"assets/bestiary_safe_portraits/mowziesmobs-sculptor.webp","bestiary":"bestiary.html#mowziesmobs-sculptor","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-mowzie","spoiler":false},{"id":"aquamirae-captain_cornelia","name":"Ghost of Captain Cornelia","mod":"Aquamirae","category":"aquamirae","categoryLabel":"Aquamirae","tier":3,"order":240,"danger":"extrême","location":"Navire de pillards dans l’Ice Maze","rewards":"Frozen Key, Music Disc, Oxygen Tank, Echo of the Ship Graveyard, Three-Bolt Helmet, Treasure Pouch, Air","description":"Créature abyssale ou spectrale d’Aquamirae, principalement rencontrée dans l’Ice Maze et ses eaux gelées. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Nettoie le pont et garde de la mobilité avant d’engager le duel spectral.","preparation":"Prends de la respiration, de la mobilité aquatique et une résistance adaptée aux océans gelés.","solo":"Nettoie les créatures secondaires avant d’engager la rencontre majeure.","coop":"Un joueur contrôle les ennemis secondaires pendant que le reste du groupe se concentre sur la cible.","image":"assets/bestiary_safe_portraits/aquamirae-captain_cornelia.webp","bestiary":"bestiary.html#aquamirae-captain_cornelia","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false},{"id":"aquamirae-maze_mother","name":"Mother of the Maze","mod":"Aquamirae","category":"aquamirae","categoryLabel":"Aquamirae","tier":3,"order":250,"danger":"extrême","location":"Profondeurs de l’Ice Maze","rewards":"Abyssal Amethyst, Sharp Bones, Echo of the Ship Graveyard, Prismarine Crystals","description":"Créature abyssale ou spectrale d’Aquamirae, principalement rencontrée dans l’Ice Maze et ses eaux gelées. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Prends de la respiration, de la mobilité aquatique et une résistance adaptée aux océans gelés.","solo":"Nettoie les créatures secondaires avant d’engager la rencontre majeure.","coop":"Un joueur contrôle les ennemis secondaires pendant que le reste du groupe se concentre sur la cible.","image":"assets/bestiary_safe_portraits/aquamirae-maze_mother.webp","bestiary":"bestiary.html#aquamirae-maze_mother","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false},{"id":"stalwart_dungeons-incomplete_wither","name":"Incomplete Wither","mod":"Stalwart Dungeons","category":"stalwart","categoryLabel":"Stalwart Dungeons","tier":3,"order":260,"danger":"extrême","location":"Awful Dungeon du Nether","rewards":"Bone, Coal, Wither Skeleton Skull","description":"Gardien d’un donjon de Stalwart Dungeons. La rencontre est liée à une structure du Nether ou de l’End. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Explore de nouveaux chunks et nettoie méthodiquement la structure avant d’ouvrir la salle du gardien.","solo":"Ne combats pas le boss avec les créatures du donjon encore actives autour de toi.","coop":"Sécurisez les couloirs, définissez un point de repli et gardez une personne chargée des ennemis secondaires.","image":"assets/bestiary_safe_portraits/stalwart_dungeons-incomplete_wither.webp","bestiary":"bestiary.html#stalwart_dungeons-incomplete_wither","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false},{"id":"stalwart_dungeons-awful_ghast","name":"Awful Ghast","mod":"Stalwart Dungeons","category":"stalwart","categoryLabel":"Stalwart Dungeons","tier":3,"order":270,"danger":"extrême","location":"Awful Dungeon du Nether","rewards":"Ghast Tear, Awful Crystal, Awful Gun","description":"Gardien d’un donjon de Stalwart Dungeons. La rencontre est liée à une structure du Nether ou de l’End. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Explore de nouveaux chunks et nettoie méthodiquement la structure avant d’ouvrir la salle du gardien.","solo":"Ne combats pas le boss avec les créatures du donjon encore actives autour de toi.","coop":"Sécurisez les couloirs, définissez un point de repli et gardez une personne chargée des ennemis secondaires.","image":"assets/bestiary_safe_portraits/stalwart_dungeons-awful_ghast.webp","bestiary":"bestiary.html#stalwart_dungeons-awful_ghast","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false},{"id":"stalwart_dungeons-nether_keeper","name":"Nether Keeper","mod":"Stalwart Dungeons","category":"stalwart","categoryLabel":"Stalwart Dungeons","tier":3,"order":280,"danger":"extrême","location":"Keeping Castle du Nether","rewards":"Nether Brick, Ancient Fire","description":"Gardien d’un donjon de Stalwart Dungeons. La rencontre est liée à une structure du Nether ou de l’End. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Explore de nouveaux chunks et nettoie méthodiquement la structure avant d’ouvrir la salle du gardien.","solo":"Ne combats pas le boss avec les créatures du donjon encore actives autour de toi.","coop":"Sécurisez les couloirs, définissez un point de repli et gardez une personne chargée des ennemis secondaires.","image":"assets/bestiary_safe_portraits/stalwart_dungeons-nether_keeper.webp","bestiary":"bestiary.html#stalwart_dungeons-nether_keeper","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false},{"id":"stalwart_dungeons-shelterer","name":"Shelterer","mod":"Stalwart Dungeons","category":"stalwart","categoryLabel":"Stalwart Dungeons","tier":3,"order":290,"danger":"extrême","location":"End Dungeon","rewards":"Void Crystal","description":"Gardien d’un donjon de Stalwart Dungeons. La rencontre est liée à une structure du Nether ou de l’End. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Explore de nouveaux chunks et nettoie méthodiquement la structure avant d’ouvrir la salle du gardien.","solo":"Ne combats pas le boss avec les créatures du donjon encore actives autour de toi.","coop":"Sécurisez les couloirs, définissez un point de repli et gardez une personne chargée des ennemis secondaires.","image":"assets/bestiary_safe_portraits/stalwart_dungeons-shelterer.webp","bestiary":"bestiary.html#stalwart_dungeons-shelterer","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false},{"id":"cataclysm-netherite_monstrosity","name":"Netherite Monstrosity","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":300,"danger":"extrême","location":"Soul Blacksmith du Nether","rewards":"Infernal Forge, Lava Power Cell, Monstrous Horn, Music Disc","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Évite la lave et les attaques de zone. Les fenêtres de dégâts sont courtes et très dangereuses.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-netherite_monstrosity.webp","bestiary":"bestiary.html#cataclysm-netherite_monstrosity","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false},{"id":"cataclysm-ender_guardian","name":"Ender Guardian","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":310,"danger":"extrême","location":"Citadelle en ruine de l’End","rewards":"Gauntlet of Guard, Music Disc","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-ender_guardian.webp","bestiary":"bestiary.html#cataclysm-ender_guardian","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false},{"id":"cataclysm-ignis","name":"Ignis","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":320,"danger":"extrême","location":"Burning Arena du Nether","rewards":"Ignitium Ingot, Music Disc","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Apprends les enchaînements plutôt que de forcer les dégâts. Le bouclier et l’esquive doivent être synchronisés.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-ignis.webp","bestiary":"bestiary.html#cataclysm-ignis","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false},{"id":"cataclysm-the_harbinger","name":"The Harbinger","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":330,"danger":"extrême","location":"Ancient Factory","rewards":"Music Disc, Block of Witherite","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-the_harbinger.webp","bestiary":"bestiary.html#cataclysm-the_harbinger","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false},{"id":"cataclysm-ancient_remnant","name":"Ancient Remnant","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":340,"danger":"extrême","location":"Cursed Pyramid et déserts","rewards":"Block of Ancient Metal, Music Disc, Remnant's Skull, Sandstorm in a Bottle","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-ancient_remnant.webp","bestiary":"bestiary.html#cataclysm-ancient_remnant","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false},{"id":"cataclysm-maledictus","name":"Maledictus","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":350,"danger":"extrême","location":"Frosted Prison et ruines nordiques","rewards":"Cursium Ingot, Music Disc","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-maledictus.webp","bestiary":"bestiary.html#cataclysm-maledictus","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false},{"id":"cataclysm-the_leviathan","name":"The Leviathan","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":360,"danger":"extrême","location":"Sunken City et océans profonds","rewards":"Abyssal Egg, Music Disc, Tidal Claws","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Prépare respiration aquatique, mobilité sous-marine et résistance. Le combat hors de l’eau ne fonctionne pas normalement.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-the_leviathan.webp","bestiary":"bestiary.html#cataclysm-the_leviathan","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false},{"id":"cataclysm-scylla","name":"Scylla","mod":"L_Ender's Cataclysm","category":"cataclysm","categoryLabel":"Cataclysm","tier":4,"order":370,"danger":"extrême","location":"Acropolis et zones marines associées","rewards":"Essence of the Storm, Lacrima, Music Disc","description":"Créature de L’Ender’s Cataclysm, un mod centré sur des donjons et combats particulièrement exigeants. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"N’entre pas avec un équipement intermédiaire. Répare entièrement l’armure et apporte plusieurs solutions de mobilité.","solo":"Joue la survie avant les dégâts : apprends les phases, garde de la distance et ne vide pas toute ton endurance.","coop":"Écartez-vous les uns des autres, conservez un joueur de secours et coordonnez les phases offensives.","image":"assets/bestiary_safe_portraits/cataclysm-scylla.webp","bestiary":"bestiary.html#cataclysm-scylla","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"company-proof-cataclysm","spoiler":false},{"id":"minecraft-wither","name":"Wither","mod":"Minecraft","category":"vanilla","categoryLabel":"Minecraft","tier":5,"order":400,"danger":"extrême","location":"Invoqué avec sable des âmes et crânes de Wither","rewards":"Étoile du Nether","description":"Wither est une rencontre majeure de Minecraft. Dans ASCENSION, Epic Fight et les systèmes de progression peuvent rendre ce combat plus exigeant.","tip":"Combat à distance au début, puis mêlée sous 50 % de vie. Prépare du lait et un terrain contrôlé.","preparation":"Prépare l’expédition vers : Invoqué avec sable des âmes et crânes de Wither. Vérifie l’équipement avant d’activer ou d’approcher la rencontre.","solo":"Conserve une route de fuite et utilise le terrain plutôt que de rester immobile.","coop":"Répartissez nourriture, soins et outils de secours entre plusieurs joueurs.","image":"assets/ascension_logo_final.png","bestiary":"bestiary.html#minecraft-wither","quest":"quests.html#boss_hunt","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false},{"id":"minecraft-ender_dragon","name":"Ender Dragon","mod":"Minecraft","category":"vanilla","categoryLabel":"Minecraft","tier":5,"order":410,"danger":"extrême","location":"Île centrale de l’End","rewards":"Expérience, portail de sortie, œuf la première fois","description":"Ender Dragon est une rencontre majeure de Minecraft. Dans ASCENSION, Epic Fight et les systèmes de progression peuvent rendre ce combat plus exigeant.","tip":"Détruis les cristaux avant le corps-à-corps et coordonne l’eau, les arcs et les lits avec prudence.","preparation":"Prépare l’expédition vers : Île centrale de l’End. Vérifie l’équipement avant d’activer ou d’approcher la rencontre.","solo":"Conserve une route de fuite et utilise le terrain plutôt que de rester immobile.","coop":"Répartissez nourriture, soins et outils de secours entre plusieurs joueurs.","image":"assets/ascension_logo_final.png","bestiary":"bestiary.html#minecraft-ender_dragon","quest":"quests.html#boss_hunt","companyGoal":"company-proof-dragon","personalGoal":"","proofGoal":"","spoiler":false},{"id":"wom-lupus_rex","name":"Lupus Aureum","mod":"Weapons of Miracles","category":"endgame","categoryLabel":"Endgame","tier":5,"order":420,"danger":"extrême","location":"Taïgas anciennes de pins ou d’épicéas","rewards":"Butin géré par le mod; vérifier JEI et la table de butin en jeu","description":"Ennemi de Weapons of Miracles, conçu pour exploiter les mouvements et compétences d’Epic Fight. Il s’agit d’une rencontre majeure demandant préparation, lecture des attaques et équipement adapté.","tip":"Approche prudemment, observe une première séquence d’attaques et garde toujours une voie de retraite.","preparation":"Considère cette rencontre comme un objectif de fin de progression et prépare un équipement complet.","solo":"N’engage pas tant que les réparations, consommables et moyens de retour ne sont pas prêts.","coop":"Définissez les rôles avant le combat et gardez une réserve de ressources commune.","image":"assets/bestiary_safe_portraits/wom-lupus_rex.webp","bestiary":"bestiary.html#wom-lupus_rex","quest":"quests.html#roi_de_cendres","companyGoal":"","personalGoal":"","proofGoal":"","spoiler":false},{"id":"vaelorn","name":"Vaelorn, Roi de Cendres","mod":"ASCENSION","category":"vaelorn","categoryLabel":"Final","tier":6,"order":999,"danger":"ultime","location":"Chapitre X — accès final de la campagne","rewards":"Preuve coopérative de Vaelorn et choix final irréversible","description":"Rencontre finale d’ASCENSION. Son contenu détaillé reste protégé tant que le mode spoilers n’est pas activé.","tip":"Rassemble toute la compagnie avant de lancer la rencontre.","preparation":"Termine le Registre, les Six Épreuves et vérifie que chaque joueur dispose de son équipement final.","solo":"La rencontre est conçue comme un sommet de progression. Ne lance pas le combat sans sauvegarde et ressources de secours.","coop":"Restez dans le rayon coopératif, annoncez les phases et confirmez le choix final avec toute la compagnie.","image":"assets/items/preuve_vaelorn.png","bestiary":"","quest":"quests.html#roi_de_cendres","companyGoal":"company-boss-vaelorn","personalGoal":"personal-participation-vaelorn","proofGoal":"","spoiler":true}];
const ADVENTURE_KEY = 'ascension.adventure.hybrid.v2';
const CODEX_KEY = 'ascension.bossCodex.v1';

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
          <img src="${escapeHtml(boss.image)}" alt="${locked ? 'Rencontre finale masquée' : escapeHtml(boss.name)}" loading="lazy">
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
        <p>Active le mode spoilers dans <a href="adventure.html#company-ending">Mon aventure</a> pour consulter la fiche de Vaelorn.</p>
        <a class="button" href="adventure.html">Ouvrir Mon aventure</a>
      </div>
    `;
  }

  const buttonLabel = status.defeated
    ? 'Retirer la victoire'
    : 'Marquer comme vaincu';

  return `
    <div class="boss-drawer-hero">
      <img src="${escapeHtml(boss.image)}" alt="${escapeHtml(boss.name)}">
      <div>
        <p class="page-kicker">${escapeHtml(boss.categoryLabel)} · Palier ${boss.tier}</p>
        <h2 id="boss-drawer-title">${escapeHtml(boss.name)}</h2>
        <div class="chips">
          <span class="tag">${escapeHtml(boss.mod)}</span>
          <span class="tag">${escapeHtml(boss.danger)}</span>
          ${boss.companyGoal || boss.personalGoal ? '<span class="tag">Synchronisable</span>' : '<span class="tag">Manuel</span>'}
        </div>
      </div>
    </div>

    <div class="boss-drawer-status">
      ${statusMarkup(boss,status)}
      <button class="button secondary" id="boss-toggle-defeated" type="button">${buttonLabel}</button>
    </div>

    <section class="boss-detail-section">
      <h3>Localisation et accès</h3>
      <p>${escapeHtml(boss.location)}</p>
    </section>

    <section class="boss-detail-section">
      <h3>Préparation recommandée</h3>
      <p>${escapeHtml(boss.preparation)}</p>
    </section>

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
      <h3>Butin important</h3>
      <p>${escapeHtml(boss.rewards)}</p>
    </section>

    <section class="boss-detail-section boss-detail-note">
      <h3>Conseil du Codex</h3>
      <p>${escapeHtml(boss.tip || boss.description)}</p>
    </section>

    <div class="boss-drawer-links">
      <a class="button" href="${escapeHtml(boss.quest)}">Voir les quêtes</a>
      ${boss.bestiary ? `<a class="button secondary" href="${escapeHtml(boss.bestiary)}">Ouvrir le bestiaire</a>` : ''}
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
