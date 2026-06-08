import Events from './Events'

const Container = () => {

    return(
        <div className="Container">
            <div className="card"> 
                <img src="/maxresdefault.jpg"/>
                <Events events="Rocket League 3v3 Open Tournament" location="The Grid Arena"/>
                <a href="">
                    <button>View Menu</button>
                </a>
            </div>
            <div className="card" >
                <img src="/Among_Us_cover_art"/>
                <Events events="Among Us" location=""/>
                <a href="">
                    <button>View Menu</button>
                </a>
            </div>
            <div className="card" >
                <img src="/images.jpeg"/>
                <Events events="Gartic Phone" location="The Artisan Perk"/>
                <a href="">
                    <button>View Menu</button>
                </a>
            </div>
            <div className="card"> 
                <img src="/minecraft.webp"/>
                <Events events="Minecraft Creative Build-Off" location="Oak Ridge Community Center"/>
                <a href="">
                    <button>View Menu</button>
                </a>
            </div>
            <div className="card"> 
                <img src="/league-of-legends.webp"/>
                <Events events="League of Legends" location="Copperwood Public Library"/>
                <a href="">
                    <button>View Menu</button>
                </a>
            </div> 
            <div className="card"> 
                <img src="/valorant-offwhitelaunch-keyart.jpg"/>
                <Events events="Valorant Tactical Night" location="Nexus Cyber Cafe"/>
                <a href="">
                    <button>View Menu</button>
                </a>
            </div>
            <div className="card"> 
                <img src="/the-future-of-fortnite-is-here-1920x1080-fd281a65c8ef.jpg"/>
                <Events events="Fortnite Zero Build Scrims" location="The Victory Lounge"/>
                <a href="">
                    <button>View Menu</button>
                </a>
            </div>
            <div className="card"> 
                <img src="/images (1).jpeg"/>
                <Events events="Mario Kart 8 Deluxe Grand Prix" location="Pinecrest Rec Center"/>
               <a href="">
                    <button>View Menu</button>
                </a>
            </div> 
            <div className="card"> 
                <img src="/images (2).jpeg"/>
                <Events events="Monster Hunter: Wilds Co-Op Hunt" location="Whispering Pines Tavern"/>
                <a href="">
                    <button>View Menu</button>
                </a>
            </div> 
            <div className="card"> 
                <img src="/images (3).jpeg"/>
                <Events events="Call of Duty: Warzone Squads Drop" location="The Armory Combat Zone"/>
                <a href="">
                    <button>View Menu</button>
                </a>
            </div>
            <div className="card"> 
                <img src="/wireframe-box-270x2031 (1).jpg"/>
                <Events events="Sea of Thieves Pirate Crew Voyage" location="The Salty Sailor Tavern"/>
                <a href="">
                    <button>View Menu</button>
                </a>
            </div> 
            <div className="card"> 
                <img src="/wireframe-box-270x2031 (1).jpg"/>
                <Events events="Fall Guys Ultimate Knockout Sprint" location="The Blunderdome Rec Center"/>
                <a href="">
                    <button>View Menu</button>
                </a>
            </div>
        </div>
    )
}

export default Container;