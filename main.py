from PIL import Image
import config
import os

print('Ouverture du fichier de base...')
im = Image.open(config.BASE_PATH)
pix = im.load()

if config.MODE == 1 or not os.path.isfile(config.TEMPLATE_PATH):
    print('Création du fichier de schéma...')
    img = Image.new('RGBA', (config.CANVA_SIZE_X * 3, config.CANVA_SIZE_Y * 3))

if config.MODE == 2 and os.path.isfile(config.TEMPLATE_PATH):
    print('Ouverture du fichier de schéma...')
    img = Image.open(config.TEMPLATE_PATH)

for y in range(im.size[0]):
    for x in range(im.size[1]):
        img.putpixel((config.X_ORIGIN * 3 + (x*3+1), config.Y_ORIGIN * 3 + (y*3+1)), pix[x, y])

img.save(config.TEMPLATE_PATH)
print('Le schéma a été créé avec succès !')
