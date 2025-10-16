import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "CheckCircle2",
      title: "Без предоплаты",
      description: "Оплата после выполнения работ"
    },
    {
      icon: "Award",
      title: "Гарантия 10 лет",
      description: "Официальная гарантия на все виды работ"
    },
    {
      icon: "Calculator",
      title: "Бесплатный расчет",
      description: "Выезд специалиста и смета бесплатно"
    },
    {
      icon: "Clock",
      title: "Опыт 10+ лет",
      description: "Более 500 успешных проектов"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name={advantage.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
