import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  return (
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
  );
};

export default Header;
