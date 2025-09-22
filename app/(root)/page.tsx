import React from "react";

import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className=" text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, possimus!
      Quo sapiente nesciunt nobis minima at nisi in dignissimos, harum
      reprehenderit odit id iure tempore corrupti suscipit nemo quasi omnis.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptate
      atque corporis ducimus dolore ipsam. Aperiam architecto ipsam, omnis odit
      nostrum molestiae minima doloremque ipsa delectus accusantium blanditiis
      nihil deserunt qui reiciendis facere esse eveniet ea similique minus autem
      optio dolor in! Repudiandae sint maiores debitis voluptatem quibusdam
      incidunt odio illo labore obcaecati qui totam, architecto ipsum deserunt
      quam rerum enim earum vitae, dolor odit amet! Sint quisquam porro ea culpa
      ex eaque quaerat, ipsa eligendi facilis doloribus recusandae voluptate
      dolor doloremque illum sequi. Assumenda quis cupiditate accusamus minima
      atque voluptatibus at. Sapiente tempore quis odio deserunt beatae in
      dolorem ab laudantium. Odio itaque voluptatem fugiat odit repudiandae sunt
      sit a deserunt ex? Esse iure possimus est quae placeat debitis assumenda
      quas enim sint temporibus non quis ut quos sed aut minus, culpa rem
      aperiam omnis corrupti quam eum ex. Fuga dolor adipisci tempore et
      aspernatur ad! Doloribus dignissimos molestias reprehenderit quod soluta
      sunt facere impedit quidem ut cupiditate illo quae maiores expedita
      architecto, blanditiis vitae quos assumenda aspernatur minus facilis illum
      maxime dolorem? Corporis, non expedita molestias sint quaerat doloremque
      aspernatur nemo fuga porro, cupiditate fugiat sed dolorum unde repellendus
      est eveniet eligendi culpa eum exercitationem dicta excepturi enim. Quasi,
      odit quibusdam. Eaque sapiente, modi voluptatum quod, similique fugiat
      officia dolor maiores neque suscipit aliquid cumque eligendi. Odit
      sapiente suscipit recusandae. Libero eaque eum asperiores minima.
      Assumenda esse voluptatum incidunt consequuntur facilis corrupti voluptas
      harum temporibus voluptatibus reprehenderit velit, mollitia pariatur
      labore, numquam ducimus autem quidem molestiae odit laboriosam dignissimos
      magnam minima eligendi eveniet saepe! Asperiores nihil ad architecto odit
      optio, facilis natus, labore facere praesentium ipsa exercitationem eaque
      id quae alias porro quibusdam, consequatur modi obcaecati illum sunt
      distinctio pariatur! Nesciunt quo perferendis magnam exercitationem ex
      ipsa iste dolorum sunt eum impedit corrupti blanditiis voluptatibus illum
      fuga vel, non perspiciatis quos temporibus adipisci doloremque optio
      corporis, cumque nemo accusamus. Veritatis sunt fugit aspernatur
      perspiciatis dolore tempora labore corporis porro voluptates consequatur
      laborum beatae et repellat natus ducimus ab, mollitia iure dolorem velit
      repudiandae quod officiis magnam. Provident repudiandae ea quod modi
      perferendis ut ratione illo dolor veritatis, cumque quis officiis fuga
      eveniet repellat dolores dicta nulla necessitatibus esse? Quo corporis
      architecto asperiores. Fugit, atque amet dolorum maiores, voluptas nulla
      quia omnis ad iusto aliquam possimus debitis. Voluptas possimus vel
      dolorum nostrum enim iusto consectetur illum? Incidunt voluptates eveniet
      cupiditate tempora eius ea est, adipisci perferendis ratione molestias
      sint natus nostrum dolorum facere consectetur sapiente repellat a porro,
      eligendi voluptas vel atque voluptate pariatur quae. Architecto
      exercitationem ipsum minus illum, praesentium quidem accusantium ullam sit
      voluptatibus, distinctio iste itaque aperiam facilis sequi harum voluptate
      adipisci dolorem cumque! Omnis incidunt saepe sapiente? At, quidem hic
      iusto beatae blanditiis aperiam tenetur sapiente quod, quibusdam molestias
      perspiciatis error quaerat deleniti quos vel aliquid? Voluptatem ipsam
      aliquid blanditiis, culpa fugiat assumenda vel adipisci, pariatur est
      velit quas doloribus inventore eum molestias quo consequuntur molestiae
      animi cumque nam! Dignissimos consequatur explicabo reprehenderit
      inventore sed corporis veritatis! Dignissimos provident nisi ipsum
      exercitationem consequuntur similique delectus?
    </div>
  );
};

export default Home;
