import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AccordionSection from '@/components/AccordionSection';
import { useTranslation } from '@/hooks/useTranslation';
import PageTitle from '@/components/PageTitle';

const WeBelieve = () => {
  const { language } = useTranslation();
  
  const faithItems = language === 'es' ? [
    {
      title: "Las Sagradas Escrituras",
      content: "CREEMOS que la Biblia, tanto el Antiguo como el Nuevo Testamento, es la Santa Palabra Inspirada de Dios. La aceptamos como la regla infalible y con autoridad para asuntos relacionados con la fe, la conducta y la doctrina. (2Tim 3:16, 1Thess 2:13, 2Pedro 1:21)"
    },
    {
      title: "La Deidad Eterna",
      content: "CREEMOS que Dios es Trino, la unidad del Padre, el Hijo y el Espíritu Santo como tres Personas distintas, iguales en un solo Dios. (Mt 28:19, JN 15:26, 2 Cor 13:14, 1JN 5:7, 1Ped 1:2)"
    },
    {
      title: "El Señor Jesucristo",
      content: "CREEMOS en la deidad de nuestro Señor Jesucristo, en Su nacimiento virginal, en Su vida sin pecado, en Sus milagros, en Su muerte vicaria y expiatoria, en Su resurrección corporal, en Su ascensión a la diestra del Padre, y en Su regreso personal futuro a esta tierra en poder y gloria para gobernar mil años. (Jn 20:28, Jn1:1, Mt 1:18-25, Heb 4:15, 1Jn 3:5, Jn 11:1-44, Mt 20:28, Lk 24:36-43, Hechos 1:9-11, Ef 1:19-23, Fil 2:5-11, Ap 19:11-21, Ap 20:1-6)"
    },
    {
      title: "La Caída del Hombre",
      content: "CREEMOS que el hombre fue creado a semejanza e imagen de Dios, pero por desobediencia voluntaria, el hombre cayó de la perfección y el pecado entró en el mundo. El resultado de esto no fue solo la muerte física sino también la muerte espiritual, que es la separación de Dios. (Gen 1:26-27, 2:17, 3:6, Rom 5:12-19)"
    },
    {
      title: "El Plan de Salvación",
      content: "CREEMOS que mientras éramos aún pecadores, Cristo murió por nosotros. La única esperanza del hombre para la redención es a través de la sangre de Jesucristo que fue derramada en la Cruz. (Rom 5:8, Ef 2:16, 1Ped 1:18-19)"
    },
    {
      title: "Salvación por Gracia",
      content: "CREEMOS que la Salvación es un regalo de Dios para el hombre. No es algo que uno pueda ganar o trabajar para alcanzar. Ef 2:8-9 dice: \"Porque por gracia habéis sido salvados por medio de la fe, y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.\""
    },
    {
      title: "Cómo Ser Salvo (Nacer de Nuevo)",
      titleKey: "howToGetSaved",
      content: "CREEMOS que para que ocurra la verdadera salvación, una persona debe arrepentirse (cambiar su forma de pensar) y darse cuenta de que es un pecador que necesita un Salvador. Debe confesar sus pecados y apartarse de su vida de pecado. Debe confesar que Jesús es el Señor, creer que murió en la cruz por los pecados del mundo, resucitó de la tumba al tercer día, y recibirlo en su corazón como Señor y Salvador. Una vez que una persona ha hecho estas cosas de corazón, ¡está salva! ¡Ha nacido de nuevo! ¡Se ha convertido en un hijo de Dios! ¡Se ha convertido en un ciudadano del Reino de Dios! ¡Está habitado y sellado con el Espíritu Santo de la promesa! ¡Se le concede vida eterna y es completamente perdonado de todos sus pecados! (Juan 1:12, 3:3-8, Colosenses 2:6, Hechos 3:19, Romanos 3:23, 10:9-13, Efesios 2:8-9, 1 Juan 1:9, Efesios 2:19, Filipenses 3:17-20, Efesios 1:13-14, Juan 3:36)",
      categoryKey: "salvation"
    },
    {
      title: "Bautismo en Agua",
      content: "CREEMOS que el bautismo por inmersión es ordenado por las Escrituras y es solo para creyentes. La ordenanza es un símbolo de la identificación del cristiano con Cristo en Su muerte, sepultura y resurrección. El bautismo es un signo externo de una obra interna. (Mt 28:19, Rom 6:3-5)"
    },
    {
      title: "Santa Comunión",
      content: "CREEMOS en la conmemoración de la Cena del Señor mediante el uso simbólico del pan y el fruto de la vid. 1Cor. 11:23-26 dice: \"… that the Lord Jesus on the same night in which He was betrayed took bread; 24 and when He had given thanks, He broke it and said, \"Take, eat; this is My body which is broken for you; do this in remembrance of Me.\" 25 In the same manner He also took the cup after supper, saying, \"This cup is the new covenant in My blood. This do, as often as you drink it, in remembrance of Me.\"26 For as often as you eat this bread and drink this cup, you proclaim the Lord's death till He comes. \" The Lord's Supper looks back in remembrance of His death and forward to His Second Coming."
    },
    {
      title: "Bautismo en el Espíritu Santo",
      content: "CREEMOS que cuando una persona es salva, el Espíritu Santo viene y mora dentro de ella, haciendo de su cuerpo el templo del Espíritu Santo (1 Corintios 6:19-20). El bautismo en el Espíritu Santo es a menudo una experiencia separada de la salvación, como se muestra en varios relatos del Nuevo Testamento (Hechos 8:14-17, Hechos 9:1-17). Sin embargo, también es posible experimentar la salvación y el bautismo con el Espíritu Santo simultáneamente (Hechos 10:44-46). Aunque hablar en lenguas es el signo más común de ser bautizado con el Espíritu Santo (Hechos 2:1-4; 10:44-46; 19:6), no es la única evidencia. El propósito principal del bautismo en el Espíritu Santo es recibir poder para ser testigo de Cristo (Hechos 1:8). Por lo tanto, la evidencia más convincente de ser bautizado con el Espíritu Santo es una vida transformada marcada por el poder, la valentía, la santidad, el amor, el fruto del Espíritu y los dones del Espíritu."
    },
    {
      title: "Sanidad Divina",
      content: "CREEMOS que la Sanidad Divina está provista en la expiación de Cristo y es el privilegio de todos los creyentes. CREEMOS en el poder de Cristo para sanar a los físicamente enfermos en respuesta a la oración de fe en el nombre de Jesús y mediante la imposición de manos. (Is. 53:4-5, Mt 8:16-17, Mc. 16:18, Stg 5:14-15)"
    },
    {
      title: "Dones del Espíritu Santo",
      content: "CREEMOS que los nueve dones del Espíritu Santo mencionados en 1Cor 12:8-10 siguen siendo para la iglesia hoy como lo eran en la iglesia primitiva. 1Cor 12:7 revela el propósito para ellos \"Pero a cada uno le es dada la manifestación del Espíritu para provecho\" CREEMOS que estos dones se manifiestan como el Espíritu Santo quiere. 1Cor 12:11 dice: \"Pero todas estas cosas las hace uno y el mismo Espíritu, repartiendo a cada uno en particular COMO ÉL QUIERE\"."
    },
    {
      title: "El Rapto",
      content: "CREEMOS que cuando este evento tenga lugar, ocurrirá la resurrección de los muertos en Cristo, luego los creyentes que están vivos serán arrebatados junto con ellos en las nubes para encontrarse con el Señor en el aire. La palabra \"rapto\" se deriva de una palabra latina raptu, que significa \"arrebatado o llevado\". Esta palabra latina es equivalente a la palabra griega \"harpazo\" traducida como \"arrebatados\" en 1Tes 4:17. 1Tes 4:16-17 describe lo que tendrá lugar en el Rapto \"Porque el Señor mismo descenderá del cielo con voz de mando, con voz de arcángel y con trompeta de Dios, y los muertos en Cristo resucitarán primero. Luego nosotros, los que vivimos, los que hayamos quedado, seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire, y así estaremos siempre con el Señor\". (1Thess. 4:16,17, 1Cor 15:51-53)"
    },
    {
      title: "El Retorno de Cristo",
      content: "CREEMOS que después de la Tribulación, Jesús regresará a la tierra física y visiblemente con Sus santos. Él regresará a la tierra como Rey de Reyes y Señor de Señores. (Mt 24:29-31, Hechos 1:9-11, Ap 19:11-21)"
    },
    {
      title: "Juicio Final y Lago de Fuego",
      content: "CREEMOS que aquellos que mueren en sus pecados sin aceptar a Jesucristo como su Señor y Salvador están eternamente perdidos. CREEMOS que junto con el diablo y sus ángeles, la bestia y el falso profeta, aquellos cuyos nombres no se encuentran en el libro de la vida (incrédulos) serán arrojados al Lago de Fuego en el juicio final. (Ap 19:20, 20:10-15)"
    },
    {
      title: "El Nuevo Cielo y la Nueva Tierra",
      content: "CREEMOS que el juicio final también traerá la destrucción ardiente de los cielos y la tierra, pero los creyentes, según la promesa de Dios, esperan un Nuevo Cielo y una Nueva Tierra, en los que mora la justicia. (2Ped 3:10-13, Ap Capítulos 21 y 22)"
    },
    {
      title: "Diezmos y Ofrendas",
      content: "CREEMOS que el método que Dios ordenó para apoyar a la iglesia local y la difusión del evangelio en todo el mundo es mediante la entrega de diezmos y ofrendas voluntarias. (Mal 3:10, 2Cor 9:7)"
    },
    {
      title: "Gran Comisión",
      content: "CREEMOS que predicar el evangelio del Reino y hacer discípulos son las responsabilidades más importantes de la iglesia. CREEMOS que el patrón divino y la estrategia para el discipulado fueron revelados a través de la relación del Señor Jesús y Sus doce discípulos. CREEMOS que ese patrón debe continuar en la iglesia local a través de la capacitación práctica \"manos a la obra\". Jesús dijo en Mt 28:19 \"Id, pues, y haced discípulos...\" (Mt 24:14, 28:19-20, Mc. 16:15)"
    }
  ] : [
    {
      title: "The Holy Scriptures",
      content: "WE BELIEVE the Bible, both the Old and New Testaments, are the Holy Inspired Word of God. We accept it as the infallible, authoritative rule for matters pertaining to faith, conduct, and doctrine. (2Tim 3:16, 1Thess 2:13, 2Peter 1:21)"
    },
    {
      title: "The Eternal Godhead",
      content: "WE BELIEVE God is Triune, the unity of the Father, Son, and Holy Spirit as three distinct, co-equal Persons in One Godhead. (Mt 28:19, JN 15:26, 2 Cor 13:14, 1JN 5:7, 1Pet 1:2)"
    },
    {
      title: "The Lord Jesus Christ",
      content: "WE BELIEVE in the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death, in His bodily resurrection, in His ascension to the right hand of the Father, and in His personal future return to this earth in power and glory to rule a thousand years. (Jn 20:28, Jn1:1, Mt 1:18-25, Heb 4:15, 1Jn 3:5, Jn 11:1-44, Mt 20:28, Lk 24:36-43, Acts 1:9-11, Eph 1:19-23, Phil 2:5-11, Rev 19:11-21, Rev 20:1-6)"
    },
    {
      title: "The Fall of Man",
      content: "WE BELIEVE man was created in the image and likeness of God. However, through voluntary disobedience, man fell from his original state of innocence, and sin entered the world. As a result, this brought not only physical death but also spiritual death, which is separation from God. (Gen 1:26-27, 2:17, 3:6, Rom 5:12-19)"
    },
    {
      title: "The Plan of Salvation",
      content: "WE BELIEVE that while we were still sinners, Christ died for us. Man's only hope for redemption is through the blood of Jesus Christ, shed on the Cross. (Rom 5:8, Eph 2:16, 1 Pet 1:18-19)"
    },
    {
      title: "Salvation Through Grace",
      content: "WE BELIEVE Salvation is a gift of God to man. It is not something one can earn or work to achieve. Eph 2:8-9 says, \"For by grace you have been saved through faith, and that not of yourselves, it is the gift of God, not of works, lest anyone should boast.\""
    },
    {
      title: "How to Get Saved (Born Again)",
      titleKey: "howToGetSaved",
      content: "WE BELIEVE that for true salvation to take place, a person must repent (change the way they think) and recognize they are a sinner in need of a Savior. They must confess their sins and turn away from a life of sin. They must confess Jesus as Lord, believe He died on the cross for the sins of the world, rose from the grave on the third day, and receive Him into their heart as Lord and Savior. Once these things are done sincerely, the person is saved! They are born again, become a child of God, a citizen of the Kingdom of God, and are indwelt and sealed with the Holy Spirit of promise. They are granted eternal life and completely forgiven of all their sins! (Jn 1:12, 3:3-8, Col 2:6, Acts 3:19, Rom 3:23, 10:9-13, Eph. 2:8-9, 1 Jn 1:9, Eph 2:19, Philip 3:17-20, Eph 1:13-14, Jn 3:36)",
      categoryKey: "salvation"
    },
    {
      title: "Water Baptism",
      content: "WE BELIEVE that baptism by immersion is commanded by the Scriptures and is only for believers. The ordinance is a symbol of the Christian's identification with Christ in His death, burial, and resurrection. Baptism is an outward sign of an inward work. (Mt 28:19, Rom 6:3-5)"
    },
    {
      title: "Holy Communion",
      content: "WE BELIEVE in the commemoration of the Lord's Supper by the symbolic use of bread and the fruit of the vine. 1Cor. 11:23-26 says, \"… that the Lord Jesus on the same night in which He was betrayed took bread; 24 and when He had given thanks, He broke it and said, \"Take, eat; this is My body which is broken for you; do this in remembrance of Me.\" 25 In the same manner He also took the cup after supper, saying, \"This cup is the new covenant in My blood. This do, as often as you drink it, in remembrance of Me.\"26 For as often as you eat this bread and drink this cup, you proclaim the Lord's death till He comes. \" The Lord's Supper looks back in remembrance of His death and forward to His Second Coming."
    },
    {
      title: "Baptism in the Holy Spirit",
      content: "WE BELIEVE when a person gets saved, the Holy Spirit comes and dwells within them, making their body the temple of the Holy Spirit (1 Cor 6:19-20). The baptism in the Holy Spirit is often a separate experience from salvation, as shown in various New Testament accounts (Acts 8:14-17, Acts 9:1-17). However, it is also possible to experience salvation and baptism with the Holy Spirit simultaneously (Acts 10:44-46). While speaking in tongues is the most common sign of being baptized with the Holy Spirit (Acts 2:1-4; 10:44-46; 19:6), it is not the only evidence. The primary purpose of the baptism in the Holy Spirit is to receive power to be a witness for Christ (Acts 1:8). Therefore, the most compelling evidence of being baptized with the Holy Spirit is a transformed life marked by power, boldness, holiness, love, the fruit of the Spirit, and the gifts of the Spirit."
    },
    {
      title: "Divine Healing",
      content: "WE BELIEVE Divine Healing is provided through the atonement of Christ. We believe in the power of Christ to heal the physically sick in response to the prayer of faith in Jesus' name and by the laying on of hands. (Is 53:4-5, Mt 8:16-17, Mk 16:18, Jam 5:14-15)"
    },
    {
      title: "Gifts of the Holy Spirit",
      content: "WE BELIEVE the nine gifts of the Holy Spirit mentioned in 1Cor 12:8-10 are still for the church today as they were in the early church. 1Cor 12:7 reveals the purpose for them \"But the manifestation of the Spirit is given to each one for the profit of all\" WE BELIEVE these gifts are manifested as the Holy Spirit wills. 1Cor 12:11 says, \"But one and the same Spirit works all these things distributing to each one individually as HE WILLS\"."
    },
    {
      title: "The Rapture",
      content: "WE BELIEVE when this event takes place the resurrection of the dead in Christ will occur, then the believers that are living will be caught up together with them in the clouds to meet the Lord in the air. The word \"rapture\" is derived from a Latin word raptu, which means \"caught away or caught up\". This Latin word is equivalent to the Greek word \"harpazo\" translated as \"caught up\" in 1Thess 4:17. 1Thess 4:16-17 describes what will take place at the Rapture \"For the Lord Himself will descend from heaven with a shout, with the voice of an archangel, and with the trumpet of God. And the dead in Christ will rise first, then we who are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air. And thus we shall always be with the Lord\". (1Thess. 4:16,17, 1Cor 15:51-53)"
    },
    {
      title: "The Return of Christ",
      content: "WE BELIEVE following the Tribulation, Jesus will return to the earth physically and visibly with His saints. He shall return to earth as King of Kings and Lord of Lords. (Mt 24:29-31, Acts 1:9-11, Rev 19:11-21)"
    },
    {
      title: "Final Judgement and Lake of Fire",
      content: "WE BELIEVE those who die in their sins without accepting Jesus Christ as their Lord and Savior are eternally lost. WE BELIEVE together with the devil and his angels, the beast and the false prophet those whose names are not found in the book of life (unbelievers) will be cast into the Lake of Fire at the final judgment. (Rev 19:20, 20:10-15)"
    },
    {
      title: "The New Heaven and New Earth",
      content: "WE BELIEVE the final judgment will also bring the fiery destruction of the heavens and the earth, but believers according to the promise of God, look forward to a New Heaven and a New Earth, in which righteousness dwells. (2Pet 3:10-13, Rev Chapters 21 and 22)"
    },
    {
      title: "Tithes and Offerings",
      content: "WE BELIEVE the method God ordained to support the local church and the spreading of the gospel throughout the world is by the giving of tithes and free-will offerings. (Mal 3:10, 2Cor 9:7)"
    },
    {
      title: "Great Commission",
      content: "WE BELIEVE preaching the gospel of the Kingdom and making disciples are the most important responsibilities of the church. WE BELIEVE the divine pattern and strategy for discipleship was revealed through the relationship of the Lord Jesus and His twelve disciples. WE BELIEVE that pattern is to be continued in the local church through \"hands-on\" practical training. Jesus said in Mt 28:19 \"Go therefore and make disciples…\" (Mt 24:14, 28:19-20, Mk. 16:15)"
    }
  ];

  return (
    <>
      <PageTitle title="We Believe" />
      <Header />
      
      <main>
        <Hero 
          title={language === 'es' ? "Creemos" : "We Believe"}
          subtitle={language === 'es' ? "Declaración de Fe" : "Statement of Faith"}
          backgroundImage="/lovable-uploads/hero-webelieve.webp"
          height="min-h-[60vh]"
        />
        
        <section className="py-12 bg-white">
          <div className="container-praise">
            <h2 className="section-title text-center mb-12">{language === 'es' ? "DECLARACIÓN DE FE" : "STATEMENT OF FAITH"}</h2>
            
            <div className="max-w-3xl mx-auto">
              <AccordionSection items={faithItems} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default WeBelieve;
