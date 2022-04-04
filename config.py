#  ┌────────────────────────────────────────────────────────────────┐
#  │           -== r/place FICHIER DE CONFIGURATION ==-             │
#  │        Modifier ce fichier pour créer le schéma désiré !       │
#  │ /!\ Veuillez utiliser les bonnes couleurs sur le pixel art /!\ │
#  └────────────────────────────────────────────────────────────────┘

BASE_PATH = 'test.png'          # Le chemin vers le fichier du pixel art
TEMPLATE_PATH = 'template.png'  # Le chemin vers le fichier du schéma (rendu final)
X_ORIGIN = 0                    # Les coordonnées en X du schéma à placer sur le canva
Y_ORIGIN = 0                    # Les coordonnées en Y du schéma à placer sur le canva
CANVA_SIZE_X = 2000             # La taille du canva sur l'axe X
CANVA_SIZE_Y = 2000             # La taille du canva sur l'axe Y
MODE = 1                        # Mode 1 = Nouveau fichier / Mode 2 = Ajout sur le fichier de base

# Pour pouvoir ajouter de nouveaux dessins sur le schéma, il faut mettre le mode sur 2
# et relancer le script en modifiant les coordonnées du pixel art !
