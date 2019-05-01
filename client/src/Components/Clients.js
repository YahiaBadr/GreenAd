import React, { Component } from 'react';
import '../Css/Clients.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default class Clients extends Component{
    
    render()
    {
        
        return(
            <div id = "Clients" className="Clients">
                <h1 id= "ClientsText">Our Clients</h1>
        <hr/>
                {/* <ScrollAnimation animateIn="zoomIn" animateOnce="true" delay="100" >
                <img alt="" src="https://static.wixstatic.com/media/11309f_3793c75292f74a8c8af08772bd6f7a0b~mv2.png/v1/fill/w_229,h_194,al_c,q_80,usm_0.66_1.00_0.01/Nissan%20Logo.webp"/>
                <img alt="" src="https://www.motogp.com.au/sites/default/files/styles/main_visual_element_transp_image_default/public/partner/image/logo/FOR-SPONSOR-Suzuki-Logo.png"/>
                <img alt="" src="https://static.wixstatic.com/media/11309f_50b1114c68a14a5081e269fd3ad3b7b1~mv2.png/v1/fill/w_288,h_66,al_c,q_80,usm_0.66_1.00_0.01/modern%20motors%20logo.webp"/>
                <img alt="" src="https://static.wixstatic.com/media/11309f_557b3be5248846fa822d48477d00538f~mv2.png/v1/fill/w_229,h_52,al_c,q_80,usm_0.66_1.00_0.01/gevodan-0%D9%A1.webp"/>
                </ScrollAnimation>
                <br/>
                <ScrollAnimation animateIn="zoomIn" animateOnce="true" delay="100" >
                <img alt="" src="https://static.wixstatic.com/media/11309f_3dc1ed44981f4ac3b3480d88edf491c2~mv2.png/v1/fill/w_229,h_187,al_c,q_80,usm_0.66_1.00_0.01/art_square_logo-0%D9%A1.webp"/>
                <img alt="" src="https://static.wixstatic.com/media/11309f_a55d794e366243dd80d8ade33249a823~mv2_d_2737_2641_s_4_2.png/v1/fill/w_216,h_209,al_c,q_80,usm_0.66_1.00_0.01/stash-0%D9%A1.webp"/>
                <img alt="" src="https://static.wixstatic.com/media/11309f_153a28f517984a868e89ee1756c543e9~mv2_d_2970_1307_s_2.png/v1/fill/w_229,h_101,al_c,q_80,usm_0.66_1.00_0.01/canadian%20council-0%D9%A1.webp"/>
                <img alt="" src="https://static.wixstatic.com/media/11309f_f23ee79af37340b1b8dcd1b491384b28~mv2.jpg/v1/fill/w_229,h_99,al_c,q_80,usm_0.66_1.00_0.01/ta2ssima.webp"/> 
                </ScrollAnimation> */}
            
                
                
                <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={100} >
                 <img alt="" src="http://pngimg.com/uploads/google/google_PNG19644.png"/>
                 <img alt="" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/1200px-Shell_logo.svg.png"/>
                 <img alt="" src="http://pluspng.com/img-png/samsung-logo-png-exciting-samsung-logo-vector-free-download-58-for-design-logo-with-samsung-logo-vector-free-download-1269.png"/>
                 </ScrollAnimation>
                 <br/>
                 <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={100} >
                 <img alt="" src="https://pngimg.com/uploads/uber/uber_PNG24.png"/>
                 <img alt="" src="https://upload.wikimedia.org/wikipedia/sco/d/d5/Vodafone_logo.png"/>
                 <img alt="" src="http://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png"/>
                 </ScrollAnimation>
                

            </div>
        )
    }
}
