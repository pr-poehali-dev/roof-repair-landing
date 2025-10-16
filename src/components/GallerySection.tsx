const GallerySection = () => {
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
  );
};

export default GallerySection;
