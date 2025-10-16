const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
