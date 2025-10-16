import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Home",
      title: "Ремонт мягкой кровли",
      description: "Профессиональный ремонт рулонных и мягких кровельных покрытий"
    },
    {
      icon: "Layers",
      title: "Замена профнастила",
      description: "Монтаж и замена металлочерепицы и профнастила любой сложности"
    },
    {
      icon: "Shield",
      title: "Утепление и гидроизоляция",
      description: "Качественная теплоизоляция и защита от влаги"
    },
    {
      icon: "Wrench",
      title: "Капитальный ремонт",
      description: "Полная реконструкция кровли с заменой стропильной системы"
    },
    {
      icon: "Droplets",
      title: "Устранение протечек",
      description: "Быстрый выезд и профессиональное устранение любых протечек"
    },
    {
      icon: "HardHat",
      title: "Монтаж новой кровли",
      description: "Строительство кровли под ключ с гарантией качества"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">Наши услуги</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Icon name={service.icon} size={32} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
