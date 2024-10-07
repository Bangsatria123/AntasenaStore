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
	{ nama: "Mobile Legends: Bang Bang", img: MLBB, url: "MLBB" },
	{ nama: "BLOODSTRIKE", img: bloodStrike, url: "bloodStrike" },
	{ nama: "COD Mobile", img: codm, url: "codm" },
	{ nama: "FC Mobile", img: fcMobile, url: "fcMobile" },
	{ nama: "Free Fire", img: freeFire, url: "freeFire" },
	{ nama: "Garena Undawn", img: garenaUndawn, url: "garenaUndawn" },
	{ nama: "Genshin Impact", img: genshinImpact, url: "genshinImpact" },
	{ nama: "Growtopia", img: growtopia, url: "growtopia" },
	{ nama: "Honor of Kings", img: honorOfKings, url: "honorOfKings" },
	{ nama: "League of Legends: Wild Rift", img: Lol, url: "Lol" },
	{ nama: "Metal Slug Awakening", img: MetalSlug, url: "MetalSlug" },
	{ nama: "PUBG Mobile", img: pubgm, url: "pubgm" },
	{ nama: "Honkai: Star Rail", img: StarRail, url: "StarRail" },
	{ nama: "Stumble Guys", img: Stumble, url: "Stumble" },
	{ nama: "Valorant", img: Valo, url: "Valo" },
	{ nama: "Zepeto", img: Zepeeto, url: "Zepeeto" },
	{ nama: "Zenless Zone Zero", img: ZZZ, url: "ZZZ" },
];

const Card = () => {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full justify-center text-center items-center  ps-2 md:ps-5 lg:ps-10'>
			{data.map((item, index) => (
				<a
					href={`../topup/${item.url}`}
					key={index}
					className='flex flex-col max-w-40'>
					<div className='relative w-40 h-40 rounded-lg shadow-lg overflow-hidden'>
						<img
							src={item.img.src}
							alt={`Card image of ${item.nama}`}
							className={`w-full h-full object-cover ${
								item.nama !== "Mobile Legends: Bang Bang"
									? "opacity-30"
									: "opacity-100"
							}`}
						/>
					</div>
					<div className=''>
						<h1 className='text-white text-lg text-center'>
							{item.nama !== "Mobile Legends: Bang Bang"
								? "on progress"
								: item.nama}
						</h1>
					</div>
				</a>
			))}
		</div>
	);
};

export default Card;
