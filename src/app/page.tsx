"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BookOpen, Calendar, ChefHat, HelpCircle, Heart, Leaf, MessageSquare, Moon, Sparkles, Sun, UtensilsCrossed, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="animatedGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Bella Vista"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Authentic Italian Cuisine in the Heart of the City"
          description="Experience the true flavors of Italy with our traditional recipes, fresh ingredients, and warm hospitality that has been delighting families for generations."
          tag="Benvenuti"
          tagIcon={UtensilsCrossed}
          buttons={[
            {
              text: "View Menu",
              href: "product"
            },
            {
              text: "Reserve Table",
              href: "contact"
            }
          ]}
          imageSrc="https://pixabay.com/get/g71da61076b659826d18d549b88f6446c69e0d67327a5b082d1f1340d1efac1dab1a3f1faad046cd9b5c2a29fe7ce98e87d67e10286ea98a4881cb91b8be2289b_1280.jpg"
          imageAlt="Elegant Italian restaurant interior with warm lighting"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="From our family kitchen in Naples to your table, we bring three generations of Italian culinary tradition and passion for authentic flavors."
          tag="Tradizione"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Family Recipes",
              description: "Passed down through three generations of Italian chefs, our recipes are authentic and time-tested.",
              icon: BookOpen
            },
            {
              title: "Fresh Ingredients",
              description: "We source the finest ingredients daily, including imported Italian specialties and local seasonal produce.",
              icon: Leaf
            },
            {
              title: "Warm Hospitality",
              description: "Every guest is treated like family in our welcoming atmosphere that captures the spirit of Italy.",
              icon: Users
            }
          ]}
          imageSrc="https://pixabay.com/get/gea52ae25c9718f92f17c13e0b0b82b42e78c08627fe011df1d675eeb8efb562981d743dea34a79acd69c725bc47dc08b93e5e53137c3ad84ae13f5c8c0886f42_1280.jpg"
          imageAlt="Our head chef preparing fresh pasta"
          imagePosition="right"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Menu"
          description="Discover our chef's signature dishes, crafted with love and the finest Italian ingredients."
          tag="Specialità"
          tagIcon={ChefHat}
          products={[
            {
              id: "1",
              brand: "Bella Vista",
              name: "Spaghetti Carbonara",
              price: "$24",
              rating: 5,
              reviewCount: "180",
              imageSrc: "https://pixabay.com/get/g53a19b6dfe34c459525c6283b6aabe643a4e1a4ef7b3c08068cf34c8428c4f1c220df5544b18c0e047ff604e675403989f6b691e3b962acd31a92694ac6b83e6_1280.jpg",
              imageAlt: "Creamy spaghetti carbonara with pancetta"
            },
            {
              id: "2",
              brand: "Bella Vista",
              name: "Pizza Margherita",
              price: "$18",
              rating: 5,
              reviewCount: "245",
              imageSrc: "https://pixabay.com/get/gff4fde3fd51dc18b05c6fe3cc888f05763a63882aa9b532dca09f1e9c17ba16dd9e8a803866f985775222be06a47f414e0eb4827661a67521bc1933fbbc9aa3a_1280.jpg",
              imageAlt: "Traditional pizza margherita with fresh basil"
            },
            {
              id: "3",
              brand: "Bella Vista",
              name: "Tiramisu",
              price: "$12",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://pixabay.com/get/g1ece65d30495a87ad9aab1c30431f15f614aa4d2a071da2841cfd9015748d68aa8041a3d76a92bd18ce9213511cd8dbd9dc9f33755f30ce93d7f88d272d68f1b_1280.jpg",
              imageAlt: "Classic tiramisu dessert with cocoa powder"
            },
            {
              id: "4",
              brand: "Bella Vista",
              name: "Chianti Classico",
              price: "$42",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://pixabay.com/get/g1995303ac80a99774e3ecdca5c9adf77117e641bc2fc752253bff779102e26819e2e792a5cf58b4c12be7f41558f9193f933ef6e40dc94213c887d11a14171fa_1280.jpg",
              imageAlt: "Premium Italian Chianti wine bottle"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Recognized by Leading Food Authorities"
          description="Trusted and recommended by top dining platforms and food critics across the city."
          tag="Riconoscimenti"
          logos={[
            "https://pixabay.com/get/gd75708991f8963edbb728d288b900451fbe4bcb64c5436399225a080d3346278f6d2942d5779eb98097d799922a818012911261e3d6c437ef681f6d00e53ce1e_1280.jpg",
            "https://pixabay.com/get/g04c93af69f93ae187c1c7fc67a9106d90b272d8a54cdfeefce197392901290521b38b8dba46190651e501cdd551d4ac56085ae9a6d97294c4712b86868197397_1280.jpg",
            "https://pixabay.com/get/g5a33edbb1fc5c54cd5bb1da524090d77745d9a593c9c0c1e8fc57bd004db905d6d1840dae71f3695cd64890c5ff6570f941a3b0627bbda56b3cd2522df5f456c_1280.jpg",
            "https://pixabay.com/get/gf4a5170626983fc6687938f6f7adee8a2caeafa197b3a0be4346280ee030cdae5855d000afe92d3aa2c955b9b986466465a915492c0dfefcf0cd4a8529a12061_1280.jpg",
            "https://pixabay.com/get/gd058c9cb9da1a31ea71302767ff7c2f92915cad5ed8d227d6e3653faf1c242acb1cf31cd08bd41f7b2b3b0b51fcbc0818bd3d759f522986ea40338da2b844856_1280.jpg",
            "https://pixabay.com/get/g7166c34c22ecee5b88eadd4786c80696cd394b3424e44f0f754f6622d72052fe5a6aeefc58b147bc90e1879420bd64cbbd588cddddfdc8a344b82441dcc271dd_1280.jpg",
            "https://pixabay.com/get/ge06854be823c1e2755120569bb78d4684601f8d2cd8e5a06718b845100884bb4d9d2d6bf6a0396cd9d2b1d26dfad95ff30a9a85a3e0edb5053cdc75a5246d6d0_1280.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Hear from our valued customers about their authentic Italian dining experience."
          tag="Recensioni"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Maria Rodriguez",
              role: "Food Blogger",
              company: "Culinary Adventures",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g7423037866bbb3564f6087ba75c356b22bad62dce24b52431e6cb41115825ef5ce805b6db0a7fa526e47690fadfc99ee528cabddbe8a2e1997e348cd41baffd6_1280.jpg",
              imageAlt: "Happy customer enjoying dinner"
            },
            {
              id: "2",
              name: "James Wilson",
              role: "Local Resident",
              company: "Downtown Community",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gcf58a2821ce290b4ae90c811d1a0431af9c82a5b4f2a75d4daeb711e37daa4c6e81fdc2f50e522d0a3f637723f7e90755a43ce7ca15f02b9d633acfd89a4a28f_1280.jpg",
              imageAlt: "Satisfied couple at restaurant table"
            },
            {
              id: "3",
              name: "Sofia Chen",
              role: "Restaurant Critic",
              company: "City Food Guide",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g1477be7ce76bcbb4f83abfbe5a803d2cfbe551545fe2b157c927b2c3721dcdf03d8e8c429fa60877c8c84e73c8a53fc1bced6e1ab3c309cd9bc85cd9015bb439_1280.jpg",
              imageAlt: "Family enjoying Italian meal together"
            },
            {
              id: "4",
              name: "Antonio Rossi",
              role: "Business Executive",
              company: "Corporate Dining",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g9490952db9233744bf25d6faeb99a71b2c1b88543983f6ca8fe1eb700cbf8024a30343a273d8e91e08665666e6760628a41907e02392ad31ed3d5c02296dd1aa_1280.jpg",
              imageAlt: "Professional enjoying business lunch"
            },
            {
              id: "5",
              name: "Emma Thompson",
              role: "Regular Customer",
              company: "Neighborhood Favorite",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g2c5e9a026f085990dcef2331f0320c9ef44d4baa8e481feffc62bcdc293c998714c76ce46554d717c046b4dba7df4b2a60099ba0b3527f42e0a7f2e47ff698a0_1280.jpg",
              imageAlt: "Friends celebrating at dinner table"
            },
            {
              id: "6",
              name: "David Martinez",
              role: "Anniversary Dinner",
              company: "Special Occasions",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g24350bcc370bafb5803ec8ccc83c37b66f7e6a255c8aab124598dc303b00bbaa935bc609f80d411489cf6e74463563ac7593ee761061dee25086a986413224e5_1280.jpg",
              imageAlt: "Romantic dinner for two"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Dining Options"
          description="Choose from our carefully curated dining experiences, each designed to showcase authentic Italian flavors."
          tag="Menu"
          tagIcon={UtensilsCrossed}
          plans={[
            {
              id: "lunch",
              badge: "Pranzo",
              badgeIcon: Sun,
              price: "$35",
              subtitle: "Perfect for business lunches",
              features: [
                "Choice of antipasto",
                "Main course selection",
                "Dessert or coffee",
                "Complimentary bread & olive oil"
              ]
            },
            {
              id: "dinner",
              badge: "Cena Completa",
              badgeIcon: Moon,
              price: "$65",
              subtitle: "Full evening dining experience",
              features: [
                "Antipasto course",
                "Primo & secondo piatto",
                "Dessert & coffee",
                "Wine pairing available",
                "Limoncello digestivo"
              ]
            },
            {
              id: "family",
              badge: "Famiglia",
              badgeIcon: Users,
              price: "$180",
              subtitle: "Perfect for families (serves 4)",
              features: [
                "Shared antipasto platter",
                "4 main course selections",
                "Family-style sides",
                "Dessert sampler",
                "Kids menu options included"
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about dining with us, reservations, and our authentic Italian experience."
          tag="Domande"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "Do you take reservations?",
              content: "Yes, we highly recommend making a reservation, especially for dinner service and weekends. You can book online or call us directly at (555) 123-PASTA."
            },
            {
              id: "2",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely! We offer gluten-free pasta options, vegetarian dishes, and can modify many recipes to accommodate allergies. Please inform us when making your reservation."
            },
            {
              id: "3",
              title: "What are your operating hours?",
              content: "We're open Tuesday through Sunday. Lunch: 11:30 AM - 3:00 PM, Dinner: 5:00 PM - 10:00 PM. We're closed on Mondays for family time and preparation."
            },
            {
              id: "4",
              title: "Do you offer private dining?",
              content: "Yes! Our private dining room accommodates up to 20 guests and is perfect for special occasions, business meetings, or family celebrations. Contact us for availability."
            },
            {
              id: "5",
              title: "Is there parking available?",
              content: "We offer complimentary valet parking during dinner hours. Street parking and nearby parking garages are also available for lunch service."
            },
            {
              id: "6",
              title: "Do you serve wine?",
              content: "We have an extensive collection of Italian wines, including regional specialties from Tuscany, Piedmont, and Sicily. Our sommelier can recommend perfect pairings for your meal."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Prenotazioni"
          title="Reserve Your Table"
          description="Join us for an unforgettable Italian dining experience. Book your table today and let us transport you to the heart of Italy."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email"
          buttonText="Make Reservation"
          termsText="By submitting, you agree to our reservation policy. We'll confirm your booking within 24 hours."
          imageSrc="https://pixabay.com/get/gf4e7ff1854b20d5a954918ef3d0afe14b883bab4c506f2eccd360891174a718a4ece725fe66399ed67cd6e4e5dd1b1658683017238f467319d0fa0ca6b16984f_1280.jpg"
          imageAlt="Cozy restaurant atmosphere with warm lighting"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Restaurant",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Menu",
                  href: "product"
                },
                {
                  label: "Reservations",
                  href: "contact"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Private Dining",
                  href: "https://example.com/private"
                },
                {
                  label: "Catering",
                  href: "https://example.com/catering"
                },
                {
                  label: "Events",
                  href: "https://example.com/events"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "(555) 123-PASTA",
                  href: "tel:+15551237278"
                },
                {
                  label: "info@bellavista.com",
                  href: "mailto:info@bellavista.com"
                },
                {
                  label: "123 Little Italy Street",
                  href: "https://maps.google.com"
                }
              ]
            }
          ]}
          logoText="Bella Vista"
          copyrightText="© 2025 | Bella Vista Ristorante"
        />
      </div>
    </ThemeProvider>
  );
}