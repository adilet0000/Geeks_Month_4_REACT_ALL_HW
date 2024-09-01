
export function About({info: { title, body }}) { // деструктуризация вложенного объекта
   // console.log(title, body);
   return (
      <>
         <h3>{title} - О, что это?</h3>
         <p>
            {body} - 
            о, обо, касательно, относительно ◆ Do you know anything about Russia? — Известно ли вам что-нибудь о России?
            вокруг, кругом ◆ In the jungle, there are snakes all about the place. — В джунглях кругом змеи.
            с, при ◆ Have you much money about you? — С собой денег много? При себе денег много?
            приблизительно, около, порядка ◆ Tomorrow about this time. — Завтра, примерно в это же время
         </p>
      </>
   );
}

// export default About;