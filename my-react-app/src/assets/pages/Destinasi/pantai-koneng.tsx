import React from "react";
import Footer from "../../components/Layouts/Footer";

const PantaiKoneng = () => {
  return (
    <>
      <section className="pt-[120px] px-[7%]">
        <div className="">
          <img
            srcSet="/public/images/pantai-koneng.jpg"
            alt="pantai-koneng"
            title="pantai-koneng"
            className="h-[400px] w-full object-cover rounded-md"
          />
          <h1 className="mt-3">Wisata Pantai Koneng</h1>
          <p>Written on June 27, 2023 by GenPI Dumai.</p>
          <hr className="mt-3" />
        </div>
      </section>
      <section className="px-[8%] pt-[30px] leading-relaxed lg:grid lg:grid-cols-[auto, 250px] lg:gap-8 ">
        <div className="flex items-center">
          <article>
            <h2>Tema 1</h2>
            <p className="mt-3 w-full lg:w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              distinctio ipsam consectetur expedita quam quae voluptatem
              deserunt odio id aut error possimus saepe consequuntur ipsa nobis
              pariatur fugit, in dolore placeat reiciendis alias ex eum
              consequatur est? Fuga rerum sunt exercitationem itaque omnis harum
              ducimus impedit voluptate unde magni, rem, similique in modi
              aliquam enim sapiente, dolorum quis fugit. Tempore, incidunt saepe
              nisi recusandae vitae amet nam iure voluptatum voluptas nulla
              iusto dolorem. Voluptatum, magni iure. Nisi quas libero,
              consectetur quibusdam natus ab eius a eveniet non unde ratione?
              Facilis, accusamus consequuntur. Expedita quibusdam necessitatibus
              deserunt quis aspernatur molestias odio. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Veritatis nostrum quod iste rem
              dolor similique iure exercitationem quisquam pariatur ipsa? In
              molestias aliquam incidunt voluptas, dolorum distinctio beatae
              voluptate, voluptatem, repellat nulla impedit eum ab molestiae.
              Cupiditate, dolore est voluptatem eos impedit, ea exercitationem
              placeat nam, porro nobis nostrum blanditiis inventore! In ipsa a
              quaerat beatae blanditiis autem! Neque id sit animi iste quam
              doloribus aperiam cumque nostrum repudiandae explicabo ad, ea
              sequi voluptas quidem architecto eum! Vitae dolorem nulla labore
              similique dignissimos voluptas, error, ut consectetur ipsa quasi,
              mollitia praesentium quis tenetur. Quas eos recusandae, modi
              beatae necessitatibus vel animi sit doloribus iure aliquid? Vel
              fugiat numquam nisi magnam asperiores, atque alias perferendis ut
              omnis? Consectetur necessitatibus nulla, consequuntur temporibus
              earum exercitationem culpa quaerat aut tempora suscipit maxime
              obcaecati cumque mollitia reiciendis, doloribus veniam. Distinctio
              soluta sequi sint suscipit non voluptatem esse perferendis
              similique blanditiis nobis! Illo, consectetur architecto? Quod,
              dolor ullam dolorem non, numquam eum officia sunt doloribus, ea
              quisquam dolores sapiente architecto! Nesciunt accusamus
              necessitatibus asperiores, fugit nemo tempore similique cum
              dolorem quam tenetur, dolorum rem sint a vero ipsa cupiditate
              earum exercitationem rerum quisquam quos vel. Commodi sequi,
              facilis quos necessitatibus a fugit molestiae esse atque!
            </p>
          </article>
          <aside className="py-4  bg-blue-gray-200">
            <div className="sticky top-32">
              <div className="overflow-auto hidden max-h-[calc(100vh-9rem-113px)] pb-4 lg:block">
                <h3>Table of Content</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  eligendi iste praesentium a at tenetur repellat quaerat odit
                  temporibus aspernatur! Earum possimus at unde veritatis
                  assumenda perspiciatis ullam modi ea.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PantaiKoneng;
