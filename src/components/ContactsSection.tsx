import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface ContactsSectionProps {
  formData: {
    name: string;
    phone: string;
    message: string;
  };
  setFormData: (data: { name: string; phone: string; message: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactsSection = ({ formData, setFormData, handleSubmit }: ContactsSectionProps) => {
  return (
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
  );
};

export default ContactsSection;
