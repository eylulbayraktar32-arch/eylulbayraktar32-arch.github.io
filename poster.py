from PIL import Image, ImageDraw, ImageFont
import arabic_reshaper
from bidi.algorithm import get_display
import os

def create_poster():
    # إنشاء خلفية زاهية (تدرج لوني دافئ للعيد)
    width, height = 1080, 1350
    img = Image.new('RGB', (width, height), '#FFF4E6')
    draw = ImageDraw.Draw(img)
    
    # تلوين جزء من الخلفية بلمسة فنية
    draw.rectangle([0, 0, width, 400], fill='#FFD3B6')
    
    # إعداد الخط (تأكدي أن الاسم يطابق الملف الذي رفعتِه)
    font_path = "Cairo-Bold.ttf"
    title_font = ImageFont.truetype(font_path, 120)
    text_font = ImageFont.truetype(font_path, 50)
    
    def fix(t): return get_display(arabic_reshaper.reshape(t))

    # كتابة النصوص
    draw.text((540, 200), fix("كسوة العيد"), font=title_font, fill="#E67E22", anchor="mm")
    
    # تفاصيل الحملة
    y = 500
    info = [
        "أحب الأعمال إلى الله سرور تدخله على مسلم",
        "توزيع كسوة كاملة (لباس وحذاء)",
        "التكلفة: 1200 ليرة للطفل الواحد",
        "المستهدف: 40 طفل في تركيا والشمال السوري",
        "للمساهمة: 05398800045"
    ]
    
    for line in info:
        draw.text((540, y), fix(line), font=text_font, fill="#2C3E50", anchor="mm")
        y += 100

    # حفظ النتيجة
    if not os.path.exists('output'): os.makedirs('output')
    img.save("output/eid_poster.png")

if __name__ == "__main__":
    create_poster()
