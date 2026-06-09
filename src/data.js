export const authorInfo = {
  name: "Gloria C. Martinez",
  firstName: "Gloria",
  email: "alondra7241@att.net",
  bio: "Gloria C. Martínez is an English-Spanish translator/interpreter by profession, specializing in technical translation. She is also a poetess by vocation and conviction. After receiving her professional certification from Rice University in Houston, she was a freelance translator for a few years.",
  bio2: "She then went to work as an in-house translator for the UT MD Anderson Cancer Center, retiring after twenty years of service. Among her poetic activities in English, some of her poems were published in 2009 by a literary group in the anthology titled Conversing through Poetry.",
  bio3: "In 2010, she was one of the selected juried poets for the Houston Poetry Festival. Her love for writing has taken her to try different genres too, as she is currently working on two more books in Spanish—one is about pseudonyms, the other is a compilation of short stories and legends.",
  roles: ["Poet", "Author", "Translator", "Interpreter"],
  achievements: [
    "First Prize - Houston Hispanic Book Fair 2010",
    "First Prize - Salvadorian Cultural Fest 2011",
    "Juried Poet - Houston Poetry Festival 2010",
    "Honorary Mention - Sabinas Hidalgo Cultural Council 2009"
  ]
}

export const book = [
  {
    id: 1,
    title: "Voices of the Heart",
    subtitle: "A Poetry Portrait",
    description: "The words in this book are those that my heart dictated for me to leave in print as traces of my steps through this life. If at least one of its pages turns out to be of your preference, it would not have been in vain to make it public.",
    coverImage: "/images/voice.jpg",
    status: "published",
    statusText: "Available Now",
    themes: ["Poetry", "Heart", "Reflection", "Life"],
    // purchaseLinks: [
    //   { name: "Amazon", url: "#" }
    // ]
  },
  {
    id: 2,
    title: "Reagan's Safety List",
    subtitle: "A Simple Guide for Staying Safe",
    description: "Reagan's Safety List helps children learn important safety lessons from their beloved grandfather, Abue. Through everyday experiences at home, school, with friends, and even while playing online, Reagan discovers how to recognize a Safe Touch, understand the difference between Safe Secrets and secrets that should be told.",
    description2: "With simple, age-appropriate examples, this story helps children build confidence, listen to their instincts, and strengthen communication with trusted adults in their lives. Ideal for children ages 4-10, parents, teachers, and counselors.",
    coverImage: "/images/reagan-front.jpg",
    coverBack: "/images/reagan-back.jpg",
    status: "published",
    statusText: "Available Now",
    themes: ["Children's Safety", "Family", "Education", "Empowerment"],
    // purchaseLinks: [
    //   { name: "Amazon", url: "#" }
    // ]
  },
  {
    id: 3,
    title: "La Lista de Seguridad de Reagan",
    subtitle: "Una guía para mantenerse seguro (Spanish Edition)",
    description: "En La Lista de Seguridad de Reagan, una niña curiosa y alegre aprende importantes lecciones de seguridad de su querido abuelo, Abue. A través de experiencias cotidianas en casa, en la escuela, con amigos y hasta mientras juega en línea, Reagan descubre cómo reconocer un Toque Seguro.",
    description2: "Inspirado en conversaciones reales entre generaciones, este libro ofrece una manera cálida y accesible de comenzar importantes diálogos sobre la seguridad personal, los límites saludables y la protección infantil. Ideal para niños de 4 a 10 años.",
    coverImage: "/images/spanish-vfront.jpg",
    coverBack: "/images/spanish-vback.jpg",
    status: "published",
    statusText: "Available Now",
    themes: ["Seguridad Infantil", "Familia", "Educación", "Bilingüe"],
    // purchaseLinks: [
    //   { name: "Amazon", url: "#" }
    // ]
  }
]

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Books", href: "#books" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
]

export const contactInfo = {
  email: "alondra7241@att.net"
}

export const reviews = [
  {
    id: 1,
    bookTitle: "Reagan's Safety List",
    bookId: 2,
    reviewer: "Emmanuel",
    rating: 5,
    date: "April 21, 2026",
    title: "EASY TO READ FOR KIDS",
    verified: true,
    review: "This is a short, easy-to-read, kid friendly, and family friendly book for kids. It is highly important to have conversations with your kids about who is considered safe and who isn't. Knowing Gloria's story adds credibility to this. She knows exactly what she is talking about because she lived the experience. I highly recommend purchasing this for your kids.",
    helpful: 0
  },
  {
    id: 2,
    bookTitle: "Reagan's Safety List",
    bookId: 2,
    reviewer: "PistolaMia",
    rating: 5,
    date: "March 9, 2026",
    title: "Great book to read and share with the kids and families",
    verified: true,
    review: "Please everyone read this book it was very short and informative and well written please read this book all children and parents should be aware of all the social media and peer pressure the kids have access to now days. Buy the book it is very helpful.",
    helpful: 0
  },
  {
    id: 3,
    bookTitle: "Reagan's Safety List",
    bookId: 2,
    reviewer: "Lulu Vega",
    rating: 5,
    date: "March 11, 2026",
    title: "Great book to read with your kids.",
    verified: true,
    review: "This book is short but great to read with your kids and show them how to be safe and aware of what's ok and not.",
    helpful: 0
  }
]