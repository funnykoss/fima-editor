import s from "../../views/AboutPageView/AboutPageView.module.css";
const About = () => {
  return (
    <>
      <h2 className={s.title}>Hanna Trofimova</h2>
      <p className={s.subTitle}> is a Ukrainian artist and filmmaker</p>
      <ul className={s.list}>
        <li className={s.itemList}>
          <h3 className={s.item}>Education</h3>
          <p className={s.itemDescription}>
            The Kyiv National I. K. Karpenko-Kary Theatre, Cinema and Television
            University
          </p>
        </li>
        <li className={s.itemList}>
          <h3 className={s.item}>Exhibitions</h3>
          <p className={s.itemDescription}>
            <p>2019 – art program of the European Lesbian Conferences (Kyiv)</p>
            <p>2020 – ARTLAB exhibition of the NGO “KyivPride” (Kyiv, IZONE)</p>
            <p>
              2022 – exhibition BORDER_LINE, VILLA MÜLLER, (Austria, Feldkirch)
            </p>
            <p>2022 – exhibition MOMENT OF CONNECTION, MOOS Space (Berlin) </p>
            <p>
              2023 – Video Art Virtual Show “Transformations”(video art gallery
              “Ephemereye”){" "}
            </p>
            <p>
              2023 – festival "NAIBUDEKINO" (Kyiv) 2023 – Svitlo gallery, Lviv
              (Ukraine)
            </p>
          </p>
        </li>
        <li className={s.itemList}>
          <h3 className={s.item}>Festivals:</h3>
          <p className={s.itemDescription}>
            <p>
              2022 - documentary film "When will the winter of 2022 end?", DOK
              Leipzig (Germany){" "}
            </p>
            <p>
              2022 - documentary film "When will the winter of 2022 end?",
              Festival internazionale Segni della notte
            </p>
          </p>
        </li>
      </ul>
    </>
  );
};
export default About;
