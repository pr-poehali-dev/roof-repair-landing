import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ReviewsSection = () => {
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

  return (
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
  );
};

export default ReviewsSection;
