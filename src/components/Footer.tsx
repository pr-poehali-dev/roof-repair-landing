import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
