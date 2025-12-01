"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Review = {
  id: number;
  author: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    id: 1,
    author: "Julia Z",
    rating: 5,
    text: "Współpraca przebiegła bardzo dobrze i terminowo. Na każdym etapie mogliśmy także liczyć na profesjonalne, poparte dużym doświadczeniem, podpowiedzi i doradztwo.",
  },
  {
    id: 2,
    author: "Kinga",
    rating: 5,
    text: "Polecam usługi Pana Mateusza profesjonalne podejście do wyceny fachowe doradztwo , oraz szczegółowy kosztorys prac. Całość przebiegła bezproblemowo. Widać bardzo duże doświadczenie i zaangażowanie. Jest to firma którą można zdecydowanie polecić!",
  },
  {
    id: 3,
    author: "Klaudia Zaczek",
    rating: 5,
    text: "Profesjonalna usługa wykonana z najwyższa starannością, porzadek zachowany, miła obsługa, polecam bardzo! :)",
  },
  {
    id: 4,
    author: "Dawid Izbrandt",
    rating: 5,
    text: "Mateusz to rzeczowy facet. Chłopaki w 3-4 dni wykonali mi 140m2 podjazdu wraz z profilowaniem i podbudową gruntu.",
  },
  {
    id: 5,
    author: "Iwona Turowska",
    rating: 5,
    text: "5 gwiazdek to za mało aby opisać profesjonalizm chłopaków . Słowni punktualni pracowici świetnie doradzą .Mega, mega jesteśmy zadowoleni . Bardzo POLECAMY",
  },
  {
    id: 6,
    author: "Mirek Sten",
    rating: 5,
    text: "Świetni fachowcy, wykonanie pracy jest na najwyższym poziomie, komunikatywność tak samo a co do porządku pozostawianym po wykonaniu pracy to jestem pod wrażeniem.",
  },
  {
    id: 7,
    author: "Tomasz Anders",
    rating: 5,
    text: "Pełen profesjonalizm- dobry kontakt- świetna jakość wykonania! Jestem zadowolony z usług tej firmy. W 100% polecam!!",
  },
  {
    id: 8,
    author: "Ruslan Grigorichenko",
    rating: 5,
    text: "Polecam , współpraca znakomita . Realizacja przebiegła perfekcyjne !",
  },
  {
    id: 9,
    author: "Jakub Domosławski",
    rating: 5,
    text: "Jestem bardzo zadowolony z wykonanej pracy. Bardzo dobry kontakt i fachowa porada. Elastyczne podejście i wyrozumiałość w przypadku zmiany koncepcji. To już kolejny raz jak miałem okazje skorzystać z usług Pana Grabowskiego i z czystym sumieniem polecam!",
  },
  {
    id: 10,
    author: "Artur Kleina",
    rating: 5,
    text: "Firme można określić trzema słowami: szybko, czysto i solidnie. Pan Mateusz ma duza wiedze i kreatywność, takze zawsze poratuje jakimś pomysłem.",
  },
  {
    id: 11,
    author: "Krystian Solarski",
    rating: 5,
    text: "Tak jak się umówiliśmy tak wszystko zostało zrobione. Panowie wykonali pracę we wcześniej ustalonym terminie, szybko i solidnie. Bazując na poprzednich doświadczeniach z budową domu, po raz pierwszy wszystko było tak jak powinno.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`Ocena: ${rating} na 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={index < rating ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-white mb-4">
            OPINIE KLIENTÓW
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Co mówią o nas klienci, z którymi tworzymy wyjątkowe przestrzenie
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="h-full">
                <div className="min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[520px] bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="text-lg font-semibold text-white">
                      {review.author}
                    </div>
                    <Stars rating={review.rating} />
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                    {review.text}
                  </p>
                  <div className="text-xs uppercase tracking-wide text-gray-400 flex items-center gap-2">
                    opinia
                    <img src="/google.svg" alt="Google" className="h-8 w-8" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
