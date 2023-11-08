import classes from './header.module.css';
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function Header() {
    return (<>
        <header className={classes.main_header}>
            <nav>
                <div className={classes.main_div}>
                    <div className={classes.logo_div}>
                        <p>INTERNMEETS</p>
                    </div>
                    <div className={classes.list_div}>
                        <p>Home</p>
                        <p className={classes.intern}>InternShips
                            <ul className={classes.ul} >
                                <li>Internships by Locations</li>
                                <li><a href="bangalore-internships.html">* Internship in Bangalore </a></li>
                                <li><a href="chennai-internships.html">* Internship in Chennai </a></li>
                                <li><a href="delhi-internships.html">* Internship in Delhi</a></li>
                                <li><a href="gurgaon-internships.html">* Internship in Gurgaon</a></li>
                                <li><a href="hydrabad-internships.html">* Internship in Hydrabad</a></li>
                                <li><a href="jaipur-internships.html">* Internship in Jaipur</a></li>
                                <li><a href="jodhpur-internships.html">* Internship in Jodhapur </a></li>
                                <li><a href="kanpur-internships.html">* Internship in Kanpur </a></li>
                                <li><a href="kolkata-internships.html">* Internship in Kolkata </a></li>
                                <li><a href="mumbai-internships.html">* Internship in Mumbai</a></li>
                                <li><a href="pune-internships.html">* Internship in Pune</a></li>
                                <li><a href="bhopal-internships.html">* Internship in Bhopal</a></li>
                                <li><a href="bhilai-internships.html">* Internship in Bhilai</a></li>
                                <li><a href="surat-internships.html">* Internship in Surat </a></li>
                                <li><a href="nagpur-internships.html">* Internship in Nagpur </a></li>
                                <li><a href="raipur-internships.html">* Internship in Raipur </a></li>
                            </ul>
                        </p>
                        <p>Training</p>
                        <p>More</p>
                        <p>Login</p>
                    </div>
                    <div className={classes.contact_div}>
                        <span><a href="tel:+91 9309978817">Connect</a></span>
                    </div>
                </div>
            </nav>
        </header>


        {/* header ends here */}
        {/* body start from here */}

        <main>

            <div className={classes.heading}>
                <div className={classes.description}>
                    <h1 style={{ color: 'rgb(17, 150, 106)' }}>INTERNMEETS</h1>
                    <h2>GET FUTURE READY and Dont Miss the Oppurtunity</h2>
                    <h2>Sponsored training from Singapore with live projects</h2>
                    <h3>With InternMeets Get Future Ready with Latest Technologies .</h3>
                </div>
                <div className={classes.contact} >
                    <span>We care </span>
                    <p>In these Covid19 situations we are helping in online training of professionals
                        and trying to contribute to the Stay Home Stay Safe Movement!</p>
                    <div className={classes.contactbtn}>
                        <a href="https://wa.link/6d9qtu"><button>Whatsapp US!</button></a>
                        <a href="mailto:internmeets@gmail.com?subject=Interested%20in%20Joining%20Internmeets%20and%20Training%20with%20Your%20Prestigious%20Company&amp;body=Hello%20Sir%2C%20%0AI%20am%20interested%20in%20Training%20and%20Internship%20with%20InternMeets..%20Please%20guide%20me%20further%0A%0AYours%20faithfully%0A">
                            <button>Mail Us!</button></a>
                    </div>

                </div>
            </div>

            {/* colleges name starts from here */}

            <div className={classes.clg_div}>
                <h2>Top colleges trust us</h2>
                <div className={classes.clg_wrap}>
                <div className={classes.clg_img}>
                <img alt="Karmveer kakasaheb Wagh Education Society"src='src/assets/colleges/22.png' />
                <img alt="Sant Gadge Baba Amarawati University" src="src/assets/colleges/3150_logo.png" />
                <img alt="Central Hindu Military Education Society" src='src/assets/colleges/5.jpg' />
                <img alt="BR College" src="src/assets/colleges/brcollege.jpg"/>
                <img alt="P R pote patil college of engineering  &amp; management" src="src/assets/colleges/download.jpg"/>
                <img alt="GH Raisoni College of Engineering"  src="src/assets/colleges/gh_raisoni_college_of_engineering_nagpur.jpg" />
                <img alt="College" src="src/assets/colleges/image_2019120264.jpg" />
                <img alt="Bhartiya Vidya Mandir" src="src/assets/colleges/images.png" />
                <img alt="D.Y.Patil College of Engineering" src="src/assets/colleges/koC_ivOt_400x400.png" />
                </div>
                </div>

            </div>
        </main>


    </>)
}

