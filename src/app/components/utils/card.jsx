import React from "react";
import bloodStrike from "../img/assets/blood_strike.png";
import codm from "../img/assets/CODM.jpg";
import fcMobile from "../img/assets/FC_Mobile.jpg";
import freeFire from "../img/assets/FreeFire.jpg";
import garenaUndawn from "../img/assets/Garena-Undawn.jpg";
import genshinImpact from "../img/assets/genshinimpact.jpg";
import growtopia from "../img/assets/growtopia.jpg";
import honorOfKings from "../img/assets/HonorofKings.jpg";
import Lol from "../img/assets/lolwildrift.png";
import MetalSlug from "../img/assets/metal-slug-Awakening.jpg";
import MLBB from "../img/assets/MLBB.jpg";
import pubgm from "../img/assets/pubgm.jpg";
import StarRail from "../img/assets/Star_RAil.jpg";
import Stumble from "../img/assets/Stumble_Guys.png";
import Valo from "../img/assets/valorant.jpg";
import Zepeeto from "../img/assets/zepeto.jpg";
import ZZZ from "../img/assets/ZZZ_ZenlessZoneZero.png";

let data = [
	{ nama: "Mobile Legends: Bang Bang", img: MLBB, url: "MLBB", status : " ready " },
	{ nama: "Valorant", img: Valo, url: "Valo" , status : " ready " },
	{ nama: "Free Fire", img: freeFire, url: "freeFire", status : " ready "  },
	{ nama: "PUBG Mobile", img: pubgm, url: "pubgm", status : " ready "  },
	{ nama: "Genshin Impact", img: genshinImpact, url: "genshinImpact" , status : " unready " },
	{ nama: "BLOODSTRIKE", img: bloodStrike, url: "bloodStrike" , status : " unready " },
	{ nama: "COD Mobile", img: codm, url: "codm" , status : " unready " },
	{ nama: "FC Mobile", img: fcMobile, url: "fcMobile" , status : " unready " },
	{ nama: "Garena Undawn", img: garenaUndawn, url: "garenaUndawn", status : " unready "  },
	{ nama: "Growtopia", img: growtopia, url: "growtopia" , status : " unready " },
	{ nama: "Honor of Kings", img: honorOfKings, url: "honorOfKings" , status : " unready " },
	{ nama: "League of Legends: Wild Rift", img: Lol, url: "Lol" , status : " unready " },
	{ nama: "Metal Slug Awakening", img: MetalSlug, url: "MetalSlug", status : " unready "  },
	{ nama: "Honkai: Star Rail", img: StarRail, url: "StarRail" , status : " unready " },
	{ nama: "Stumble Guys", img: Stumble, url: "Stumble" , status : " unready " },
	{ nama: "Zepeto", img: Zepeeto, url: "Zepeeto" , status : " unready " },
	{ nama: "Zenless Zone Zero", img: ZZZ, url: "ZZZ" , status : " unready " },
];

const Card = ({ params, a,b }) => {
	return (
		<div className='flex flex-col gap-5 '>
			<h1 className='text-2xl text-white text-center font-bold '>{params}</h1>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full justify-center text-center items-center flex-col ps-2 md:ps-5 lg:ps-10 gap-5'>
				{data.slice(a,b).map((item, index) => ( 
					<a
						href={`../../${item.url}`}
						key={index}
						className='relative flex flex-col w-[11em] h-[300px] items-center justify-between py-5 bg-[rgb(46,46,46)] card rounded-2xl '>
				

						
						<div className={`relative w-[160px] h-[160px] rounded-lg shadow-lg  flex justify-center items-center `}>
							<img
								src={item.img.src}
								alt={`Card image of ${item.nama}`}
								className={`w-[150px] h-[150px] object-cover relative z-10 rounded-2xl`}
							/>	
						</div>
						
						<div className=''>
							<h1 className={`text-white text-lg text-center ${item.status !== " ready "
									? "" 
									: "title"}`}>
								{item.status !== " ready "
									? "on progress"
									: item.nama}
							</h1>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default Card;
