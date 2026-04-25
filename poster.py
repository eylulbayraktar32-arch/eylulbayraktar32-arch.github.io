
from PIL import Image, ImageDraw, ImageFont
import arabic_reshaper
from bidi.algorithm import get_display
import os

def create_poster():
    width, height = 1080, 1350
    img = Image.new('RGB', (width, height), '#1a1a4b')
    draw = ImageDraw.Draw(img)
    
    # محاولة إيجاد ملف الخط مهما كان اسمه المرفوع
    font_path = "Cairo-VariableFont_slnt,wght.ttf"
    
    if not os.path.exists(font_path):
        # بحث تلقائي عن أي ملف ينتهي بـ .ttf إذا فشل الاسم أعلاه
        for file in os.listdir():
            if file.endswith(".ttf"):
                font_path = file
                break

    title_font = ImageFont.truetype(font_path, 120)
    text_font = ImageFont.truetype(font_path, 50)
    
    def fix(t): return get_display(arabic_reshaper.reshape(t))

    draw.text((540, 200), fix("كسوة العيد"), font=title_font, fill="#d4af37", anchor="mm")
    
    y = 500
    info = [
        "أحب الأعمال إلى الله سرور تدخله على مسلم",
        "توزيع كسوة كاملة (لباس وحذاء)",
        "التكلفة: 1200 ليرة للطفل الواحد",
        "المستهدف: 40 طفل في تركيا والشمال السوري",
        "للمساهمة: 05398800045"
    ]
    
    for line in info:
        draw.text((540, y), fix(line), font=text_font, fill="white", anchor="mm")
        y += 100

    if not os.path.exists('output'): os.makedirs('output')
    img.save("output/eid_poster.png")

if __name__ == "__main__":
    create_poster()
