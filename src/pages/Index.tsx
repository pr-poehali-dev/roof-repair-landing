import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

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

  const reviews = [
    {
      name: "Александр К.",
      text: "Отличная работа! Устранили протечку на крыше гаража за один день. Цена соответствует качеству.",
      rating: 5
    },
    {
      name: "Марина П.",
      text: "Делали капитальный ремонт кровли дачи. Работали аккуратно, убрали за собой. Гарантию дали письменно.",
      rating: 5
    },
    {
      name: "Дмитрий В.",
      text: "Заменили старый шифер на профнастил. Работа выполнена качественно и в срок. Рекомендую!",
      rating: 5
    }
  ];

  const gallery = [
    {
      image: "https://cdn.poehali.dev/projects/76344ef7-7a3d-45fd-9f29-56a4399f5316/files/ec82c64c-3af9-4cbc-8e10-3eaef2867113.jpg",
      title: "Ремонт мягкой кровли"
    },
    {
      image: "https://cdn.poehali.dev/projects/76344ef7-7a3d-45fd-9f29-56a4399f5316/files/301b4e32-932f-40b2-8390-33c5be91f084.jpg",
      title: "Замена профнастила"
    },
    {
      image: "https://cdn.poehali.dev/projects/76344ef7-7a3d-45fd-9f29-56a4399f5316/files/b09dbb2c-728e-4d12-be0c-8b5c4153d635.jpg",
      title: "Капитальный ремонт"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={32} className="text-primary" />
            <span className="text-xl font-bold text-primary">КровляСервис</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#works" className="text-sm font-medium hover:text-primary transition-colors">Наши работы</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+79001234567" className="hidden sm:block text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
              +7 (900) 123-45-67
            </a>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a href="#services" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Услуги</a>
                  <a href="#about" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>О компании</a>
                  <a href="#pricing" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Цены</a>
                  <a href="#works" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Наши работы</a>
                  <a href="#reviews" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Отзывы</a>
                  <a href="#contacts" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
                  <a href="tel:+79001234567" className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors mt-4 pt-4 border-t">
                    +7 (900) 123-45-67
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

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

      <section id="about" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-secondary">О компании</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              КровляСервис — профессиональная кровельная компания с опытом работы более 10 лет. 
              Мы специализируемся на ремонте и монтаже всех типов кровельных покрытий. 
              Наша команда состоит из сертифицированных специалистов, прошедших обучение у ведущих производителей кровельных материалов.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Выполненных объектов</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">10</div>
                <div className="text-muted-foreground">Лет на рынке</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">98%</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section id="works" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-secondary mb-4">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-12">Примеры выполненных проектов</p>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                  <div className="font-semibold">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-secondary mb-4">Контакты</h2>
            <p className="text-center text-muted-foreground mb-12">Оставьте заявку, и мы свяжемся с вами в течение 15 минут</p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card id="contact-form">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input 
                          placeholder="Ваше имя" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Input 
                          placeholder="Телефон" 
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Textarea 
                          placeholder="Опишите задачу"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="min-h-24"
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full text-lg">
                        Отправить заявку
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+79001234567" className="text-lg text-primary hover:text-primary/80">+7 (900) 123-45-67</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@krovlya-service.ru" className="text-primary hover:text-primary/80">info@krovlya-service.ru</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <p className="text-muted-foreground">г. Москва, ул. Строительная, д. 15</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <p className="text-muted-foreground">Пн-Вс: 8:00 - 20:00</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="lg" variant="outline" className="flex-1">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    WhatsApp
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    <Icon name="Send" size={20} className="mr-2" />
                    Telegram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Home" size={28} className="text-white" />
                <span className="text-xl font-bold">КровляСервис</span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональный ремонт кровли с гарантией 10 лет
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Ремонт мягкой кровли</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Замена профнастила</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Утепление кровли</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Устранение протечек</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#works" className="hover:text-white transition-colors">Наши работы</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (900) 123-45-67</li>
                <li>info@krovlya-service.ru</li>
                <li>г. Москва, ул. Строительная, д. 15</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
            © 2024 КровляСервис. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;