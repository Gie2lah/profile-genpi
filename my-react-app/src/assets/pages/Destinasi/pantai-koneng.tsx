import React from "react";
import Footer from "../../components/Layouts/Footer";
import TableOfContents from "../../components/Layouts/TableOfContent";

const PantaiKoneng = () => {
  return (
    <>
      <section className="pt-[120px] px-[10%]">
        <div className="">
          <img
            srcSet="/public/images/pantai-koneng.jpg"
            alt="pantai-koneng"
            title="pantai-koneng"
            className="h-[450px] w-full object-cover rounded-md"
          />
          <h1 className="mt-3">Wisata Pantai Koneng</h1>
          <p>Written on June 27, 2023 by GenPI Dumai.</p>
        </div>
        <hr className="mt-3" />
      </section>
      <section className="px-[9%] pt-[20px] leading-relaxed lg:grid lg:grid-cols-[auto, 250px] lg:gap-8 ">
        <div className="flex items-center">
          <article className="content max-w-4xl p-10">
            <h2>1- Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
              eum saepe quo impedit. Recusandae corporis facere at? Qui,
              eligendi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
              eum saepe quo impedit. Recusandae corporis facere at? Qui,
              eligendi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil
              magni necessitatibus nesciunt, obcaecati aspernatur, esse amet
              voluptates, libero modi sunt. Facilis a animi quibusdam,
              consequatur repudiandae eius asperiores inventore.
            </p>
            <h3>2- Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
              eum saepe quo impedit. Recusandae corporis facere at? Qui,
              eligendi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
              eum saepe quo impedit. Recusandae corporis facere at? Qui,
              eligendi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              dolorem facere iure officia! Quae, libero nam ipsam doloremque
              maxime nisi dicta, earum dolorum alias culpa minus at optio
              mollitia repellendus.
            </p>
            <h4>3- Lorem ipsum dolor sit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
              eum saepe quo impedit. Recusandae corporis facere at? Qui,
              eligendi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
              eum saepe quo impedit. Recusandae corporis facere at? Qui,
              eligendi?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              cum.
            </p>
          </article>
          <aside className="py-4">
            <div className="stiky top-36"></div>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PantaiKoneng;
