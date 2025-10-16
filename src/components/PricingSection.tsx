import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-secondary mb-4">Цены на услуги</h2>
        <p className="text-center text-muted-foreground mb-12">Ориентировочная стоимость работ за м²</p>
        <div className="max-w-4xl mx-auto space-y-4">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Home" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Ремонт мягкой кровли</h3>
                    <p className="text-sm text-muted-foreground">Рулонные материалы, битумная черепица</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">от 450 ₽</div>
                  <div className="text-sm text-muted-foreground">за м²</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Layers" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Замена профнастила</h3>
                    <p className="text-sm text-muted-foreground">Металлочерепица, профлист</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">от 550 ₽</div>
                  <div className="text-sm text-muted-foreground">за м²</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Утепление и гидроизоляция</h3>
                    <p className="text-sm text-muted-foreground">Современные материалы</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">от 350 ₽</div>
                  <div className="text-sm text-muted-foreground">за м²</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Wrench" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Капитальный ремонт кровли</h3>
                    <p className="text-sm text-muted-foreground">Полная реконструкция с заменой стропил</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">от 850 ₽</div>
                  <div className="text-sm text-muted-foreground">за м²</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Droplets" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Устранение протечек</h3>
                    <p className="text-sm text-muted-foreground">Срочный выезд, локальный ремонт</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">от 2500 ₽</div>
                  <div className="text-sm text-muted-foreground">выезд</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary bg-primary/5">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="HardHat" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Монтаж новой кровли под ключ</h3>
                    <p className="text-sm text-muted-foreground">Материалы + работа + гарантия</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">от 1200 ₽</div>
                  <div className="text-sm text-muted-foreground">за м²</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">* Точная стоимость рассчитывается после бесплатного осмотра объекта</p>
          <Button size="lg" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
            <Icon name="Calculator" size={20} className="mr-2" />
            Получить точный расчет
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
