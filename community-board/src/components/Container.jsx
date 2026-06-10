import Events from './Events'

    const EVENTS_DATA = [
    { id: 1, img: "/img/maxresdefault.jpg", title: "Rocket League 3v3 Open Tournament", location: "The Grid Arena", link:"https://www.start.gg/tournament/rocket-league-3v3-open-tournament/details"},
    { id: 2, img: "/img/Among-Us.avif", title: "Among Us", location: " Crossroads Tabletop Tavern", link:"https://www.businessfives.co.uk/among-us-tournament-rules/"},
    { id: 3, img: "/img/Gartic_Phone_cover.png", title: "Gartic Phone", location: "The Artisan Perk", link:"https://flashgaming.fandom.com/wiki/Gartic_Phone"},
    { id: 4, img: "/img/minecraft.webp", title: "Minecraft Creative Build-Off", location: "Oak Ridge Community Center", link:"https://www.nse.gg/events/minecraft-creative-build-competition-2025/"},
    { id: 5, img: "/img/league-of-legends.jpg", title: "League of Legends", location: "Copperwood Public Library", link:"https://gamesync.us/tournaments/lol/"},
    { id: 6, img: "/img/valorant.webp", title: "Valorant Tactical Night", location: "Nexus Cyber Cafe", link:"https://ftw.riotgames.com/en-us/valorant/night-queue"},
    { id: 7, img: "/img/fortnite.jpg", title: "Fortnite Zero Build Scrims", location: "The Victory Lounge", link:"https://fortnitetracker.com/play/yunite_NobleZeroBuild"},
    { id: 8, img: "/img/MarioKart.jpg", title: "Mario Kart 8 Deluxe Grand Prix", location: "Pinecrest Rec Center", link:"https://www.nintendo.com/nintendo-live/tournaments/mario-kart-8-deluxe-championship-2023/?srsltid=AfmBOorXChEkcYio1aJekCkOWcYrjTZ8fdpDJXYQlEJ8PKyCocO03rKn"},
    { id: 9, img: "/img/monster-hunter-wilds.jpg", title: "Monster Hunter: Wilds Co-Op Hunt", location: "Whispering Pines Tavern", link:"https://www.monsterhunter.com/championship/25-26/usa/"},
    { id: 10, img: "/img/CallOfDuty.jpg", title: "Call of Duty: Warzone Squads Drop", location: "The Armory Combat Zone", link:"https://callofduty.worldseriesofwarzone.com/resurgence"}
]


const Container = () => {

    return(
        <div className="Container">
            {EVENTS_DATA.map((item) => (
                <div className="card" key={item.id}>
                    <img src={item.img} alt={item.title}/>
                    <Events events={item.title} location={item.location} />
                    <a href={item.link}>
                        <button>View Menu</button>
                    </a>

                </div>

            ))}

        </div>

    )
}

export default Container;