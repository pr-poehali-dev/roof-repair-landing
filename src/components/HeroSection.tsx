import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-secondary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary leading-tight">
              Ремонт кровли любой сложности
            </h1>
            <p className="text-xl text-muted-foreground">
              Профессиональный подход. Гарантия 10 лет. Работаем без предоплаты.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Заказать ремонт
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
          <div className="animate-slide-in-left">
            <img 
              src="https://cdn.poehali.dev/projects/76344ef7-7a3d-45fd-9f29-56a4399f5316/files/301b4e32-932f-40b2-8390-33c5be91f084.jpg" 
              alt="Профессиональный ремонт кровли"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
