const Page = () => {
  return (
    <div className="pt-[100px] relative min-h-[150vh]">
      <div className="indicator z-20  animate-progress [animation-timeline:scroll(root)] origin-left fixed top-[20px] left-0 w-full h-[30px] bg-blue-600"></div>
      <div
        className="ball  w-8 h-8 rounded-full bg-green-500 fixed top-8
        left-4
       animate-bounce [animation-timeline:scroll(root)] 
      "
      ></div>
      <div className="flex justify-center gap-4 [timeline-scope:--scale-progress] border animate-colorChange [animation-timeline:--scale-progress]">
        <div className="post max-w-[500px] max-h-[400px] overflow-y-scroll [scroll-timeline:--scale-progress] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          sint, facere similique cumque, beatae porro alias itaque cum vitae
          magni sit. Voluptatibus libero itaque nisi numquam ut, quae dicta
          velit! Maiores earum, exercitationem molestiae natus voluptates nam
          vero laudantium libero adipisci repellendus eius minus corrupti ab,
          accusantium a quibusdam cum culpa commodi error dolor! Quos, natus
          quia cumque modi autem odio pariatur tempora recusandae enim esse
          rerum neque quaerat accusamus quisquam nulla suscipit? Rem laborum
          laudantium aliquam ipsum, ex alias iure odio, quod neque repellat
          porro adipisci iste esse omnis? Alias voluptas nihil impedit animi,
          iure earum saepe accusantium pariatur non neque quo ad voluptatem
          magni laudantium nisi quia ullam, accusamus autem inventore
          voluptatibus sapiente veniam consequatur labore! Veritatis, saepe
          explicabo eum, pariatur voluptatem itaque dolores nesciunt expedita
          rerum iste enim voluptate ipsam cumque dolorem ducimus voluptatibus ea
          a, voluptates distinctio quidem consectetur. Iure nihil nostrum
          repellat amet, perferendis laborum sapiente ad molestiae eos voluptate
          quasi obcaecati cumque quo necessitatibus dignissimos, consectetur hic
          velit pariatur maxime at nobis blanditiis accusamus numquam eius.
          Ullam fuga quod possimus pariatur laudantium dolore reprehenderit
          quasi eum ut ab illum aut nam maxime minima repellendus explicabo
          mollitia maiores distinctio enim voluptatum, labore id fugiat. Harum,
          cumque? Sequi, quod velit. Impedit aspernatur nihil quisquam ea quae
          delectus ducimus rem nesciunt vitae modi cupiditate, aliquid incidunt
          dolorem cumque nisi asperiores commodi repellat vero eveniet officia
          autem! Neque quaerat pariatur fugit exercitationem tenetur velit,
          consectetur corrupti architecto nobis accusantium optio quam dolores
          nemo enim omnis maxime, recusandae dolor, laborum adipisci id! Minus
          dignissimos eos quos laudantium officia! Possimus quo sed sapiente
          dignissimos doloribus. Quod possimus optio placeat architecto impedit,
          ea inventore dolor dolores praesentium voluptatum delectus sit nisi
          odio. Quibusdam accusamus doloribus quis eaque recusandae, impedit ea,
          qui nostrum nisi voluptatem quia quaerat, nam molestias atque!
          Tenetur, nostrum. Doloremque modi culpa commodi quisquam! Ratione eos
          nam voluptatibus deserunt blanditiis, nostrum eveniet repellendus
          necessitatibus beatae molestiae sint quos magnam tempore labore
          deleniti veniam quis! Soluta, corrupti obcaecati laboriosam amet cum
          iusto cupiditate dignissimos, est reiciendis aliquam voluptas sit,
          quas facilis delectus quibusdam dicta hic! Blanditiis, laboriosam
          earum molestiae exercitationem libero similique. Impedit, rerum eaque
          maxime sequi animi laboriosam itaque alias, reprehenderit id totam
          tempora magni consequuntur, quos non deserunt eius quia ipsum beatae
          ex a harum suscipit! Numquam culpa quisquam, molestias et distinctio
          accusantium quasi architecto atque eos, enim, maxime harum sit quaerat
          iusto. Odio ullam dignissimos sed a dolorem perferendis cumque nisi
          distinctio, repellendus harum placeat officiis magnam necessitatibus
          optio molestiae natus sequi architecto doloremque officia voluptate
          rem tempora illum? Deserunt similique libero non consequatur saepe
          cum, vel veniam cupiditate animi quam molestiae magnam sed aut autem
          perspiciatis aperiam, inventore dolore suscipit sapiente, debitis
          rerum. Nobis omnis earum repellendus architecto eos ipsum? Ullam
          voluptates, voluptatem dolorum quo modi, ipsa, dolor nobis dolores
          quia architecto consequatur. Suscipit qui hic reprehenderit architecto
          doloribus impedit odit ratione dolorem, deserunt veritatis corrupti
          expedita laboriosam unde, eaque error magnam deleniti quia cum, fugit
          incidunt exercitationem! Id temporibus impedit rerum a maiores,
          praesentium corrupti.
        </div>
        <div className="w-[30px] line bg-blue-700 animate-scaleYProgress origin-bottom [animation-timeline:--scale-progress]"></div>
      </div>
    </div>
  );
};
export default Page;
