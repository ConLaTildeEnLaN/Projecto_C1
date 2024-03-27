var panorama, viewer, container, infospot;
container = document.querySelector('#index');
panorama = new PANOLENS.ImagePanorama('imagenes/Lutherstadt.jpg');

var infospot1 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
var infospot1 = new PANOLENS.Infospot(50, 'imagenes/icon1.png');
infospot1.position.set(-6 ,113 , -500);
infospot1.addHoverText('El gran actor Sir Christopher Frank Carandini Lee (conocido como Sir Christopher Lee) fue un actor y cantante inglés. Con una carrera de más de sesenta años, fue conocido como un actor con una voz profunda e imponente, y a menudo interpretaba a villanos en películas de terror y franquicias cinematográficas. Fue nombrado caballero por sus servicios a las artes dramáticas y a la caridad en 2009, y recibió becas de la Academia Británica de las Artes Cinematográficas y de la Televisión (2011) y del Instituto de Cine Británico (2013).', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(0,0,0,0.8); color:#F1F1F1F1; border-radius: 5px; padding: 20px; font-size: 14px width: 400px;">El gran actor Sir Christopher Frank Carandini Lee (conocido como Sir Christopher Lee) fue un actor y cantante inglés. Con una carrera de más de sesenta años, fue conocido como un actor con una voz profunda e imponente, y a menudo interpretaba a villanos en películas de terror y franquicias cinematográficas. Fue nombrado caballero por sus servicios a las artes dramáticas y a la caridad en 2009, y recibió becas de la Academia Británica de las Artes Cinematográficas y de la Televisión (2011) y del Instituto de Cine Británico (2013).</div>'
panorama.add(infospot1);

var infospot2 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
var infospot2 = new PANOLENS.Infospot(50, 'imagenes/icon2.png');
infospot2.position.set(-376 ,-64 , -500);
infospot2.addHoverText('Logró notoriedad por interpretar al Conde Drácula en siete películas de terror de la compañía cinematográfica Hammer Film Productions. Otros de sus papeles destacados en cine incluyen a Francisco Scaramanga en la película del agente secreto James Bond The Man with the Golden Gun (1974), al Conde Dooku en varias películas de la saga de Star Wars (2002-2008) entre otros personajes', -30);
infospot2.element.innerHTML = '<div style="background-color: rgba(0,0,0,0.8); color:#F1F1F1F1; border-radius: 5px; padding: 20px; font-size: 14px width: 400px;">Logró notoriedad por interpretar al Conde Drácula en siete películas de terror de la compañía cinematográfica Hammer Film Productions. Otros de sus papeles destacados en cine incluyen a Francisco Scaramanga en la película del agente secreto James Bond The Man with the Golden Gun (1974), al Conde Dooku en varias películas de la saga de Star Wars (2002-2008) entre otros personajes.</div>'
panorama.add(infospot2);

var infospot3 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
var infospot3 = new PANOLENS.Infospot(50, 'imagenes/icon3.png');
infospot3.position.set(-500 ,162 , 5);
infospot3.addHoverText('Lo que no muchos saben: es que fue un artista del genero: "Metal Opera": una combinacion entre el opera y el heavy metal', -30);
infospot3.element.innerHTML = '<div style="background-color: rgba(0,0,0,0.8); color:#F1F1F1F1; border-radius: 5px; padding: 20px; font-size: 14px width: 400px;">Lo que no muchos saben: es que fue un artista del genero: "Metal Opera": una combinacion entre el opera y el heavy metal</div>'
panorama.add(infospot3);

var infospot4 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
var infospot4 = new PANOLENS.Infospot(50, 'imagenes/icon4.png');
infospot4.position.set(-500 ,9 , -3);
infospot4.addHoverText('La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.', -30);
infospot4.element.innerHTML = `<div class="" style=""><iframe width="720" height="480" src="https://www.youtube.com/embed/0iDs7kJDmvc?si=PqqUwupU9f_8uyhz"></iframe></div>`;
panorama.add(infospot4);

var infospot5 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
var infospot5 = new PANOLENS.Infospot(50, 'imagenes/icon5.png');
infospot5.position.set(-500 ,12 , 273);
infospot5.addHoverText('Álbumes: Christopher Lee Sings Devils, Rogues & Other Villains (1998), Revelation (2006), Charlemagne: By the Sword and the Cross (2010), Charlemagne: The Omens of Death (2013)', -30);
infospot5.element.innerHTML = '<div style="background-color: rgba(0,0,0,0.8); color:#F1F1F1F1; border-radius: 5px; padding: 20px; font-size: 14px width: 400px;">Álbumes: Christopher Lee Sings Devils, Rogues & Other Villains (1998), Revelation (2006), Charlemagne: By the Sword and the Cross (2010), Charlemagne: The Omens of Death (2013)</div>'
panorama.add(infospot5);


var infospot6 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
var infospot6 = new PANOLENS.Infospot(50, 'imagenes/icon6.png');
infospot6.position.set(500 ,-248 , 7);
infospot6.addHoverText('El Señor de los Anillos marcó el comienzo de un importante resurgimiento de su carrera que continuó con el papel del Conde Dooku en los filmes Star Wars: Episodio II - El ataque de los clones (2002) y Star Wars: Episodio III - La venganza de los Sith (2005), dirigidas por George Lucas. A pesar de su avanzada edad, Lee se encargó de la mayor parte del manejo de la espada, aunque necesitó un doble para las tomas largas con movimientos más enérgicos.', -30);
infospot6.element.innerHTML = '<div style="background-color: rgba(0,0,0,0.8); color:#F1F1F1F1; border-radius: 5px; padding: 20px; font-size: 14px width: 400px;">El Señor de los Anillos marcó el comienzo de un importante resurgimiento de su carrera que continuó con el papel del Conde Dooku en los filmes Star Wars: Episodio II - El ataque de los clones (2002) y Star Wars: Episodio III - La venganza de los Sith (2005), dirigidas por George Lucas. A pesar de su avanzada edad, Lee se encargó de la mayor parte del manejo de la espada, aunque necesitó un doble para las tomas largas con movimientos más enérgicos..</div>'
panorama.add(infospot6);

var infospot7 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
var infospot7 = new PANOLENS.Infospot(50, 'imagenes/icon7.png');
infospot7.position.set(500 ,36 , -1);
infospot7.addHoverText('En la mañana del domingo del 7 de junio de 2015, falleció en el Westminster Hospital, en el barrio londinense de Chelsea, centro en el que había ingresado tres semanas antes y donde había cumplido 93 años, tras sufrir problemas respiratorios e insuficiencia cardiaca. ', -30);
infospot7.element.innerHTML = '<div style="background-color: rgba(0,0,0,0.8); color:#F1F1F1F1; border-radius: 5px; padding: 20px; font-size: 14px width: 400px;">En la mañana del domingo del 7 de junio de 2015, falleció en el Westminster Hospital, en el barrio londinense de Chelsea, centro en el que había ingresado tres semanas antes y donde había cumplido 93 años, tras sufrir problemas respiratorios e insuficiencia cardiaca. .</div>'
panorama.add(infospot7);


viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);