import React, { createContext, useState } from 'react';

export const context = createContext();

const DataContext = (props) => {
	const [data, setData] = useState([
		{
			id: 1,
			title: 'Pathan(2023)',
			img: 'https://static.toiimg.com/photo/95246650.cms',
			category: 'Bollywood',
			tags: '',
			description:
				'Pathaan is a 2023 Bollywood spy thriller action drama film directed by Siddharth Anand and starring Shah Rukh Khan, Deepika Padukone and John Abraham in the lead roles. The film is the fourth installment in the YRF Spy Universe and follows the exiled RAW agent Pathaan (Khan) who teams up with ISI agent Rubina Mohsin (Padukone) to stop Jim (Abraham), a former RAW agent, from unleashing a deadly virus on India.The film is a spectacular showcase of action, romance and patriotism, with stunning visuals and breathtaking stunts.\n The film has been shot in various locations across India, Afghanistan, Spain, UAE, Turkey, Russia, Italy and France, giving it a global appeal. The film also features a cameo appearance by Salman Khan as Tiger, another spy from the YRF Spy Universe. The film has received positive reviews from critics and audiences alike, who have praised the performances of the lead actors, the direction, the music and the action sequences. The film has also broken several box office records in India and overseas, becoming the highest-grossing Hindi film of all time and the second-highest-grossing Indian film of all time. Pathaan is a must-watch film for fans of Shah Rukh Khan and spy thrillers. The film delivers on its promise of being a thrilling and entertaining ride that will keep you on the edge of your seat till the end. The film also sets up the stage for more exciting adventures in the YRF Spy Universe. Pathaan is a film that celebrates the spirit of India and its heroes who fight for its safety and glory.',
		},
		{
			id: 2,
			title: 'Fursat(2023)',
			img: 'https://static.toiimg.com/photo/97619521.cms',
			category: 'Bollywood',
			description:
				'Fursat is a simple yet effective short film that works mainly because of Vishal Bharadwaj’s ability to tell a meaningful tale even with limited resources. It stars Ishaan Khatter and Wamiqa Gabbi. In Short Fursat is out on Disney+ Hotstar. The short film stars Ishaan Khatter and Wamiqa Gabbi. Fursat is shot on an iPhone. By Roktim Rajpal: Fursat, out now on Disney+ Hotstar, is a simple yet ambitious short film that works mainly because of Vishal Bharadwaj’s command over his craft. It is shot on an iPhone and revolves around a young man who is able to see the future because of a mysterious device, which he calls the Doordarshak. Using the device, he comes to know that something bad is going to happen to his friend. Following this, he sets out on a mission to protect her. The plot is inherently interesting and caters to those fond of grand romantic dramas. That said, one gets the feeling that it would have worked better had this been a feature film. Fursat begins with a shocking scene that sets the stage for what is to follow. We are then treated to the well-executed Waqt song that hits the right notes because of its meaningful lyrics. It also takes the narrative forward without breaking the flow. The action soon shifts to the robbery, which forms the crux of Fursat. The sequences have a sense of urgency, which makes them feel haunting. Their impact is further enhanced by a twist, which feels natural and adds a new layer to the narrative.',
		},
		{
			id: 3,
			title: 'Kutty(2023)',
			img: 'https://static.toiimg.com/photo/96757813.cms',
			category: 'Bollywood',
			description:
				'Four top Tamil filmmakers - Gautham Vasudev Menon, Vijay, Venkat Prabhu and Nalan Kumarasamy have come together to offer insight into love, hope and relationships with their unique storylines in an anthology titled Kutty Story. Though it’s refreshing to watch short films that don’t entirely bank on star power, only two of the four stories create any impact and give us something to take home. Gautham Menon’s Edhirpaara Mutham and Nalan Kumarasamy’s Aadal Paadal hits the right note and stays true to the genre. Though Nalan is the youngest when compared to other filmmakers of this anthology, his short-filmmaking finesse stands tall.Director: Gautham Menon Cast: Gautham Menon, Amala Paul, Vinoth Krishnan and Robo Shankar. Edhirpara Mutham revolves around the lives of two engineering students - Aadhi (Vinoth Krishnan) and Mrinalini (Amala Paul), who are best friends. Though they get along well and spend most of the time together, Aadhi and Mrinalini believe that there is an invisible line between love and friendship and they shouldn’t cross it for any reason. Aadhi insists the same to his friends and says that a man and woman can just be friends no matter what. However, the events that unfold in the later stage of his life destroy his theory and make him understand that there is love between the two. But is it too late now? Edhirpaara Mutham is exactly what we can expect from a Gautham Menon film and he has stayed true to his genre. Be it a 20-minute short film or a 120-minute drama, Gautham has always managed to bring the audience into his world where there are only two souls with a kind of divine love between them. Their relationship is often complicated as well as matured. Gautham Menon, in Edhirpara Mutham, plays the elder version of Vinoth Krishnan. The role suits him perfectly and he has pulled it off with ease.',
		},
		{
			id: 4,
			title: 'Govinda Naam Mera',
			img: '	https://static.toiimg.com/photo/96172501.cms',
			category: 'Bollywood',
			description:
				'Govinda ruled the 90’s with his signature comedy! No one could even come close to his timing and the punches. His swag is unmatched. So, when makers try to capture that same zest and energy by using his name in a title, your expectations are bound to rise. However, Shashank Khaitan’s Govinda Naam Mera, starring Vicky Kaushal, has nothing to do with the actor Govinda. It only attempts to pun on his name, perhaps in an effort to replicate his vibe. The plot revolves around Govinda (Vicky Kaushal), who is looking to sell his ancestral house. But the task isn’t easy. Stuck between a dominating wife (Bhumi Pednekar) and his screechy mom (Renuka Shahane), things take a turn when Govinda gets embroiled in a situation that involves a dead body. With a dozen odd supporting characters, the film starts looking like one gag followed by another with no attempt to sound cohesive. For Vicky Kaushal, it is a departure from the serious roles he played in Uri and Sardar Udham Singh. Here, he gets to do a bonafide masala film. He aces in every scene, giving it his all. Be it the comic or the romantic moments, Vicky gives this film his all as Govinda Waghmare. Only if the script and dialogues had more substance would he have had a better character graph than a linear monotonous non-stop slapstick sequence. The star of the film is, however, Bhumi Pednekar, who ditches her classy image and goes all out to play the role of a loud and over-the-top wife, who takes sadistic pleasure in torturing her husband. Bhumi’s scenes with Vicky in the first half are a major highlight. Kiara has a few scenes where she shines, but overall she’s reduced to playing the pretty girl in distress. The second half, especially the climax and the last one hour, are the best parts of the film. There is also a Ranbir Kapoor cameo that momentarily lifts the vibe of the film.',
		},
		{
			id: 5,
			title: 'Freddy(2022)',
			img: '	https://static.toiimg.com/photo/95835542.cms',
			category: 'Bollywood',
			description:
				'He walks like Norman Bates and has a mind of Dexter, Dr Freddy Ginwala (Kartik Aaryan) is not your ordinary dentist. Extremely awkward, an introvert, low on self-confidence, especially with girls, Freddy is a social outcast. Until the day he meets Kainaaz (Alaya F). That’s when everything changes. Director Shashanka Ghosh uses every shade of grey in his cinematic canvas to paint Freddy’s cryptic world. Right from the opening frame where he gets stood up by a prospective date to the climax, Ghosh creates an eerie atmosphere of uncertainty around every character who crosses his path with Freddy. Things take a sinister path when Freddy starts wooing Kainaaz and plotting ways to prove his love for her. As the narrative weaves its web of intrigue, we realise that Freddy has his mind on more than just extracting teeth. Freddy sets out to be a psychological thriller, and it does have a lot going for it early on. The entire onus of making Freddy this dark, unpredictable character lies on the fragile shoulders of its lead actor - Kartik Aaryan. If Kartik fumbles so does Freddy. Everything from his gaze that makes his first date uncomfortable to his walk to the way he tucks in his shirt is calculated like an algorithm to make Freddy this great seducer who wants all your attention. That’s where Ghosh succeeds the most in making Freddy the centre piece of this loosely put together puzzle. The background score to the peripheral characters who play an important part in Freddy’s life all work in sync to take the story forward. Freddy’s flaw is that it doesn’t feel dark enough. There are scenes where you feel like the writers held themselves back from going all out. Perhaps the weight of an A-list Bollywood actor put too much pressure on them during the writing sessions, or maybe they didn’t know where to take the story. The climax is predictable and feels a bit lazy and rushed. Despite the hiccups the film works because of its lead actor who makes a brave choice of turning the tables on his lover boy image and take a career risk in the middle of his reign as the box office champ.',
		},
		{
			id: 6,
			title: 'Mission Majanu',
			img: 'https://media5.bollywoodhungama.in/wp-content/uploads/2020/12/Mission-Majnu-2.jpg',
			category: 'Bollywood',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloremque repudiandae ipsa iusto corporis. Aliquam rerum vitae inventore quis! Ducimus cumque aspernatur, iusto exercitationem sint adipisci soluta illum ipsum nam veniam delectus enim labore dicta minima sed magni, deserunt quasi accusamus aperiam earum fugiat ex? Maiores itaque repudiandae iusto! Inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque qui blanditiis ut itaque dolores cupiditate exercitationem sapiente, assumenda voluptatibus aliquam.\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloremque repudiandae ipsa iusto corporis. Aliquam rerum vitae inventore quis! Ducimus cumque aspernatur, iusto exercitationem sint adipisci soluta illum ipsum nam veniam delectus enim labore dicta minima sed magni, deserunt quasi accusamus aperiam earum fugiat ex? Maiores itaque repudiandae iusto! Inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque qui blanditiis ut itaque dolores cupiditate exercitationem sapiente, assumenda voluptatibus aliquam.',
		},
		{
			id: 7,
			title: 'Making A Good Hollywood Movie',
			img: 'https://images.unsplash.com/photo-1581390114939-946f9a890a7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9sbHl3b29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
			category: 'Hollywood',
			description:
				"What makes a good movie is a well-written, well-shot, well-edited, well-acted, cohesive, and internally consistent story with the ability to elicit emotion, establish atmosphere, and guide a response. The top movies of all time list are particularly divisive, but all lists are meant to provoke discussion. No other creative medium has undergone such a radical transformation during the past 150 years. A great song will never lose its quality. A great melody never gets old, and a hot beat never gets old. In fact, young people today could like Harry Styles over The Beatles. A whole generation has probably grown accustomed to Christopher Nolan's portrayal of Batman since the release of The Dark Knight merely 14 years ago. In this ever-evolving collection, you may find everything from cult favorites to romantic comedies, and horror flicks to crime capers. Ranking the finest movies ever made is essentially impossible. But the list that most closely resembles a definitive ranking is one that is based on viewer's ratings. The list of the finest films ever produced on IMDb may be among the best of its kind in this regard. The list is created using the reviews of top films from millions of spectators. Despite the list being updated frequently, the top films haven't changed much throughout the years. Even if watching the newest movies is entertaining, it could occasionally be simpler to return to the timeless classics that everyone appears to like. The best Hollywood has to offer, international hits, movies from the twenty-first century, and films from decades before may all be found among IMDb's top-rated films. Of course, each moviegoer has a unique opinion of the top 10 movies of all time. Whether fans are rewatching an old favorite or catching up on a well-known film they have missed, this collection is a terrific place to look for the greatest movies of all time.",
		},
		{
			id: 8,
			title: 'Lost City(2022)',
			img: 'https://wallpapercave.com/dwp1x/wp10941904.jpg',
			category: 'Hollywood',
			description:
				"Treasure hunting + adventure + comedy + romance seems like a formula for cinematic success, and, indeed, Paramount Pictures has struck gold here. Giving off Romancing the Stone vibes, The Lost City has a hilarious script that's made even funnier with perfect casting. Bullock is the master of playing a relatably put-upon woman, and here she also gets to be the smartest person in the room and the jungle. It's a kick to see Tatum and co-star Brad Pitt play into their sex-symbol images, laughing along with the audience while simultaneously showing that the 'ideal man' has the same insecurities and vulnerabilities as everyone else. While the top-billed stars are national treasures, the real find in The Lost City is Da'Vine Joy Randolph as Loretta's publisher, Beth. She could have easily turned out as a typical romcom confidante, but Randolph offers a different take, evolving 'the best friend' into a magnificent, three-dimensional, confident woman who is a boss by all definitions, literally going to the ends of the Earth for those she loves. While this isn't a perfect film, it's pretty great, and writer Seth Gordon puts plenty in it to love, including a strong message that it's the hard times that help us appreciate the good times.",
		},
		{
			id: 9,
			title: '300 Rise of an Empire(2014)',
			img: 'https://wallpapercave.com/dwp1x/wp10822561.jpg',
			category: 'Hollywood',
			description:
				'Based on Frank Miller’s latest graphic novel, Xerxes, and told in the breathtaking visual style of the blockbuster 300, this new chapter of the epic saga takes the action to a fresh battlefield—on the sea—as Greek general Themistokles (Sullivan Stapleton) attempts to unite all of Greece by leading the charge that will change the course of the war. 300: Rise of an Empire pits Themistokles against the massive invading Persian forces led by mortal-turned-god Xerxes (Rodrigo Santoro), and Artemesia (Eva Green), vengeful commander of the Persian navy.',
		},
		{
			id: 10,
			title: 'Batman(2023)',
			img: 'https://wallpapercave.com/dwp1x/wp10947950.jpg',
			category: 'Hollywood',
			description:
				"As of 27 Jul 2023, it is unknown who from the Batman movie franchise would appear in the 2023 movie 'The Batman Legend,' and who the director would be. However, Dave Batista and Warner Bros. confirmed that he would reprise his role as Anton 'Bane' Vega in Justice League II, and would have a much larger role than in The Batman Legend.1 'The Batman - Part II' (2025) is still in development, and it remains to be seen if it will be the end of this version of Batman or just the conclusion to a particular arc.2 Executive producer and originator of The Batman film franchise Michael Uslan confirmed on his Instagram that filming for Part II kicks off on Nov. 23. McFarlane Toys revealed the Batman: The Ultimate Movie Collection 6-Pack at Comic-Con 2023, priced at $119.99.0",
		},
		{
			id: 11,
			title: 'G.I.Joe Snake Eyes(2021)',
			img: 'https://wallpapercave.com/dwp1x/wp10947960.jpg',
			category: 'Hollywood',
			description:
				"In his youth, Snake Eyes, along with Storm Shadow, was trained by the Arashikage Clan. A homeless Caucasian child, he entered the clan's home seeking food, only to be caught by a young Storm Shadow, who intended to ' punish' the stranger for stealing. They both fought around the kitchen with Snake showing remarkable skill at such a young age being able to hold his own against the well-trained Storm Shadow. Their fight was eventually stopped by the clan Master, Blind Master, who was impressed with Snake's skill, and despite Storm's protests, allowed the youngster into the clan. While Storm Shadow proceeded to claim Snake to be weak, the Master cheerfully corrected him, saying: 'He didn't fight like a weakling,' then asked the initiate what he wanted to be known as, thus the origin of his current moniker. Snake trained with the clan, with Storm Shadow as his sparring partner. Storm constantly beat him brutally in their training, much to the Master's disapproval. Eventually, Snake was able to beat Storm in a training session; something that pleased him and the Master profoundly. This was not to last though. It appeared that Storm Shadow (angered by the Master favoring an outsider over a true Clan member) attacked the old man and ran him through the back with his sword before fleeing the temple. However, it was later revealed that it was in fact Zartan who killed the Master. Storm, however, was blamed for the death, leading the Clan to resent him. The death of Blind Master had a profound effect on Snake Eyes, who considered the Blind Master the closest thing he had to a father. He took a vow of silence, never again speaking to anyone, either friend or foe. He communicates with his fellow G.I. Joe members using hand gestures, the closest he ever comes to using his voice being heavy breathing following an exhausting battle.",
		},
		{
			id: 12,
			title: 'Black Panther(2018)',
			img: 'https://wallpapercave.com/dwp1x/wp10822644.jpg',
			category: 'Hollywood',
			description:
				"'Black Panther' is a 2018 action-adventure sci-fi film directed by Ryan Coogler, starring Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, and Danai Gurira. The movie follows T'Challa, the heir to the advanced kingdom of Wakanda, as he leads his people into a new future and confronts a challenger from his country's past. The villain Ulysses Klaue, played by Andy Serkis, does not play a significant role until close to an hour into the film. 'Black Panther: Wakanda Forever' is the second installment in the 'Black Panther' franchise, released on Disney+ on March 12, 2023. The film features the king of Atlantis, now Talokan, making his MCU debut. The film also features Namor, the king of Atlantis, making his MCU debut. 'Black Panther ' is set to release on July 8, 2022, and is being written and directed by Ryan Coogler, honoring Chadwick Boseman's legacy and portrayal of T'Challa",
		},
		{
			id: 13,
			title: "Microsoft's AI Dominance",
			img: 'https://static.toiimg.com/thumb/resizemode-4,msid-97753804,width-800,height-450,imgv-75/97753804.jpg',
			category: 'Technology',
			description:
				"In March this year, Microsoft introduced the Microsoft 365 Copilot to help its commercial customers with a variety of tasks. In a blog post, Microsoft had then explained how Copilot will be users' 'copilot for work' and will help users carry out their day-to-day tasks at work with ease. Copilot is integrated into Microsoft 365 in two ways. It works alongside you, embedded in the Microsoft 365 apps you use every day — Word, Excel, PowerPoint, Outlook, Teams and more — to unleash creativity, unlock productivity and uplevel skills, the company had said back then.Copilot was made available to a few companies via an Early Access Program and companies like Chevron, Goodyear, General Motors and Dow got a first-hand experience of the company's AI-powered subscription service. And now, Microsoft has announced the pricing for Microsoft 365 Copilot. Bing Chat Enterprise unlocks generative AI for work. And Microsoft 365 Copilot brings a whole new way of working – reasoning over all your business data in the context of your enterprise, including the ability to ask questions and get answers from the web. Microsoft 365 Copilot will be available for commercial customers for USD30 per user per month for Microsoft 365 E3, E5, Business Standard and Business Premium customers when broadly available, the company wrote in a blog post. Microsoft 365 Copilot can help corporate workers with their day-to-day work. The blog post explains that from keeping a track of meetings and emails to creating a SWOT analysis form internal files and data from the web, Copilot will be at the users' command.",
		},
		{
			id: 14,
			title: 'Samsung Galaxy S23 Ultra',
			img: 'https://static.digit.in/default/tr:w-2048/14649samsungs23-ultra1-2-20231280x720-7e165d4c68.jpeg',
			category: 'Technology',
			description:
				"It has been more than 4 years since I used an Android phone as my primary device. But when Samsung launched the Galaxy S23 Ultra earlier this month, I was sure to turn it into my daily driver. I have been using the Galaxy S23 Ultra as my primary phone for nearly 10 days and absolutely love the experience it delivers. But, I should accept that being an iPhone user for years, I did face some issues with the user interface initially, but eventually got used to OneUI. Using the phone as my primary device also means that I used the phone to watch lots of content including Instagram Reels and YouTube Videos, multitask, click photos and create Reels, make calls, send emails and WhatsApp messages, and a lot more. Now, at absolutely no point in time, did the phone lag. Also, be it the camera, the performance, or the battery life, the Samsung Galaxy S23 Ultra ticks all the right boxes. But, the question is - is it worth the price? We will find the answer to that question in this review. before getting into the review, let's take a look at the price. In India, the Samsung Galaxy S23 Ultra comes in three variants – 12GB RAM plus 256GB storage, 12GB RAM plus 512GB storage, and 1TB storage plus 12GB RAM. The price starts at Rs 1,24,999 and goes up to Rs 1,54,999.",
		},
		{
			id: 15,
			title: 'Best Desktops to buy',
			img: 'https://static.digit.in/default/tr:w-2048/dell-cover-87c7394e42.jpeg',
			category: 'Technology',
			description:
				"Home›Tech›News»The Best Desktop Computers. The best desktop computers SABRINA CASTROAPR 22, 2022, 01:05 IST. The best desktop computers The best desktop computers offer more power than your average laptop, and in most cases far more storage space as well as better ergonomics. Our current pick for the best overall desktop computer is the Dell XPS Special Edition for its style and myriad internal hardware options for users of all needs. Computer components have gotten smaller, more compact, and more powerful through recent years. Nowadays, you can find people using laptops as their main computer rather than desktops. This doesn't necessarily mean there isn't an ideal place for one of the best desktop computers in your home or office. Laptops just happen to be more capable to handle a multitude of tasks that people want completed in a quick time frame and in different locations. However, many desktop computers offer more power than a simple laptop could. For example, gamers need to be able to run high-performance games without running into any issues, namely through a dedicated graphics card. Likewise, video and audio editors need a powerful processor to handle high-resolution files as well as the specific programs (Adobe Premiere, Final Cut, etc.) needed to get their work done. Even the average joe may want a desktop computer too, because they can easily be customized to their specific needs and allow for wider connectivity with more ports.",
		},
		{
			id: 16,
			title: 'Battle for semiconductors',
			img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
			category: 'Technology',
			description:
				"China and the US are locked in a fierce chip battle. And now China has put curbs on the exports of germanium and gallium, two niche metals used in the manufacturing of semiconductors and electronics. But experts fear that export restrictions on these metals may not have a significant impact, as substitutes are available. So, while the consequences of China's export restrictions may not be severe, does it serve as a warning to the US and its allies? And with Foxconn withdrawing from its planned joint venture with India's Vedanta to set up semiconductor and display production plants in Gujarat, do we really see India bucking this trend and being an alternative to China?",
		},
		{
			id: 17,
			title: "Apple's new Macbook",
			img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
			category: 'Technology',
			description:
				"Apple will likely host its latest iPhone 15 series event in September, but is also said to hold another event after that. Apple already took wraps off the 15-inch MacBook Air model, a Mac Studio, and Mac Pro in June, with its M2 chips. A fresh report by Bloomberg's Mark Gurman reveals that the tech company is gearing up to announce new M3-powered Macs in October. Here is all we know so far. Apple is tipped to launch three new devices with an M3 processor. These could be a iMac, a 13-inch MacBook Air, and a 13-inch MacBook Pro. These are expected to offer faster performance compared to last year's models. But, there is no confirmation from Apple's side, and for obvious reasons, because the event is too far. Users are still advised to take the details with a pinch of salt. “Now that Apple has gotten the 15-inch MacBook Air and new M2 Ultra-based Macs out the door, the October launch could feature the first Macs with M3 chips,” he said in his newsletter. A report citing insights from TF Securities analyst Ming-Chi Kuo suggests that Apple has plans to adopt the advanced 2nd-generation TSMC 3nm process for its latest M3 and A17 Bionic chipsets. These powerful chips are anticipated to be utilized in the upcoming Mac computers and iPhone 15 Pro models, scheduled for release in 2023. Additionally, it is being said that Apple will likely commence production for the M3 Pro or M3 Max processors in the first half of 2024.",
		},
		{
			id: 18,
			title: 'VR Gaming',
			img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
			category: 'Technology',
			description:
				"Meta Platforms CEO Mark Zuckerberg on Thursday revealed the company's next generation mixed reality headset, the Quest 3, as the company braces for Apple to potentially reshape a nascent market that Meta has dominated so far. Priced starting at $499, the device will be 40% thinner than the company's previous headset and feature color mixed reality, which combines augmented and virtual reality (AR/VR) elements, Zuckerberg said in an Instagram post ahead of Meta's annual gaming conference. Meta also said it would lower the prices of its existing Quest 2 headsets, while adding performance upgrades to those devices aimed at delivering a smoother user experience. The Quest 3 will have a new Qualcomm chipset with twice the graphics performance as the Quest 2, Zuckerberg said. He said the device would launch in the autumn and promised more details at the company's annual AR/VR conference on Sept. 27. Zuckerberg's announcement came less than a week before tech rival Apple was expected to unveil its first mixed reality device, a high-end product with a price point around $3,000, according to a Bloomberg report. Meta's Quest 2 and Quest Pro devices comprised nearly 80% of the 8.8 million virtual reality headsets sold in 2022, according to an estimate by market research firm IDC. Far behind in second place at 10% market share was the Pico device by Chinese-owned ByteDance, which also owns social media competitor TikTok. Still, despite its dominance, Meta has struggled to sell its vision of an immersive 'metaverse' of interconnected virtual worlds and expand the market for its devices beyond the niche of the gaming community. The company classified eight of the 10 most popular apps on its Quest store as being in the gaming category, according to a Reuters count. After a burst of interest during the pandemic, headset sales tumbled in the first quarter of this year, with the overall AR/VR headset market declining 54.4% year over year.",
		},
		{
			id: 19,
			title: 'Continental Food',
			img: 'https://wallpapercave.com/wp/wp11979548.jpg',
			category: 'Food',
			description:
				'Every cuisine has its influence on its region and culture. Continental cuisine is no different. Read to know everything about continental cuisine and its delicacies. Different cuisine has its own story, flavour and taste. This peculiar flavour comes from the local produce of the region and the recipes that have passed from generation to generation. Cuisines like Chinese, Japanese, Indian have their own unique taste. Similarly, continental food is unique due to its region, tradition and culture. Often continental and oriental food is considered to be the same. The major difference between these two cuisines is the region they are prepared in. Continental food is prepared in the continent of Europe. It essentially contains Mediterranean and French cuisine. Continental food includes the cuisines of European countries like Spain, France, Italy and more. This cuisine’s staple ingredients are olive oil, wine, garlic and various herbs and spices to season and add flavour to the dishes. Whereas, oriental cuisine belongs to Southeast Asian countries like China, Thailand, Korea and Japan. Another difference between continental and oriental cuisine is that continental cuisine uses fewer vegetables than oriental cuisine. Even though today both the cuisines use baby corns, sun-dried tomatoes and lotus roots in their dishes. These ingredients were never used in Continental cuisine but as the recipes evolve and new dishes get developed the chefs use them without any hesitation. The primary cooking techniques of continental cuisine are frying, roasting and baking. Whereas, in oriental cuisine, it is stir-frying, boiling and quick frying. ',
		},
		{
			id: 20,
			title: 'Fresh Cakes',
			img: 'https://wallpapercave.com/wp/wp11979569.jpg',
			category: 'Food',
			description:
				'This Fresh Strawberry Cake recipe starts with a rich, moist vanilla cake that is divided into three layers, and slathered with the most light and fluffy whipped cream and cream cheese frosting, and it’s overflowing with fresh strawberries. It’s a light yet filling treat that’s perfect for summer. It’s the best Strawberry Cake you’ve ever had!. The vanilla cake is dense, almost like a pound cake but fluffier, which is of course perfect for this Strawberry Shortcake type dessert. In the original recipe I found, there were instructions for making a two layer cake, but if this homemade strawberry cake was going to be fancy enough to satisfy my boy, it had to have three layers. I increased the recipe and made a couple of adjustments, which I’ll share in the recipe below. Prep. Always, always preheat your oven for even cooking. Start by preheating your oven to 325 degrees F. Grease and flour 3, 9-inch round baking pans. Combine all of the ingredients as described in the recipe, dry ingredients in one bowl and wet in another. I use a stand mixer with the paddle attachment. Make sure to carefully follow the measurements. Pour. Divide the batter into the three pans. Having a kitchen scale would come in handy here, but you can also just eyeball it. Tap the pans on the counter a few times to release air bubbles. This will result in a flatter top for your cake layers. Slide the pans into the oven and bake for about 35 minutes. The tops should be golden and should spring back when lightly touched. A toothpick inserted into the center of the cake should come out clean with a few moist crumbs. Cool the cake layers in the pans for 10-15 minutes, then transfer to a wire rack to cool completely before frosting.',
		},
		{
			id: 21,
			title: 'Chinese Recipes',
			img: 'https://wallpapercave.com/dwp1x/wp9443719.jpg',
			category: 'Food',
			description:
				'CHINESE SESAME NOODLES (麻酱面) Check out this classic version of sesame noodles done in 10 minutes. Learn how to make the perfectly silky and tasty sauce, along with tips on noodle choices and ingredient substitutions. Sesame noodles, known as Ma Jiang Mian/麻酱面 in Chinese, are popular in many regions of China. They are often served at street stalls or neighborhood restaurants as breakfast or lunch. Over the decades, they have made their way to overseas restaurants and takeout, becoming a popular dish with a few local twists in taste. Although regional sesame noodles differ in taste, they all share a few features: round wheat noodles generously coated with a silky, rich sesame paste-based sauce, and accompanied by julienned crispy vegetables and/or other savory toppings.',
		},
		{
			id: 22,
			title: 'Food Testing',
			img: 'https://wallpapercave.com/dwp1x/wp11919243.jpg',
			category: 'Food',
			description:
				'Most medical experts agree that at-home food sensitivity tests are not worth your money. Instead, consider taking an at-home food allergy test or meeting with a doctor or registered dietitian to identify the cause of your unwanted symptoms. Though many types of at-home tests claim to help identify food sensitivities, most experts agree that these tests aren’t reliable and should not be recommended. In this article, we discuss what food sensitivities are, why at-home testing kits are not worth your money, and what to do instead if you suspect you have a food sensitivity. We’ll also discuss signs that may indicate a food allergy rather than a sensitivity and provide options for at-home food allergy testing.',
		},
		{
			id: 23,
			title: 'Fluffy Pancakes',
			img: 'https://wallpapercave.com/dwp1x/wp11979582.jpg',
			category: 'Food',
			description:
				'Every single Sunday begins with pancakes… and ends with leftover pancakes from the morning. These are everything you want in a pancake. They’re soft and so fluffy… each mouthful melts in your mouth… you’ll be reaching for more than one. Stack. Possibly. It all starts with the batter. Too thick and they will be gluggy and undercooked on the inside. Too runny, and the pancakes will spread out and won’t fluff up. I like to test the batter with my spoon or ladle, lifting it gently above the rim of the bowl. It has to be thick BUT able to run slowly and nicely off of the spoon. A couple of lumps is okay, but I do like to smooth out my batter as much as I can gently with a wire whisk. Preheat your good quality, non stick pan or griddle on medium heat first. Once it’s hot, lower the heat down to low-medium heat. Wait about two minutes. This part is crucial and so worth it. Lightly grease the pan with a small amount of butter (yes, even on non stick pans), and wipe away any excess butter with a sheet of paper towel. Use a 1/4 cup measuring cup to pour your batter so you get perfect, evenly sized pancakes. Start pouring from the middle, then continue pouring slowly in a circular motion so that the batter spreads into perfect round shapes. Allow the pancakes to cook properly! Don’t rush them on high heat, or flip them too early. Let that under-side cook to a beautiful golden brown colour, and when bubbles start forming on top and around the surface (batter side), they are ready to flip. How to get that flip perfected without creating lopsided pancakes? Grab a good, plastic spatula and slide it underneath the pancake. Use your WRIST to gently flip them instead of using your whole arm. You’ll know what I mean when you’re in front of your pan ready to flip. THIS makes a HUGE difference.',
		},
		{
			id: 24,
			title: 'Chcolate Cusines',
			img: 'https://wallpapercave.com/wp/wp11710743.jpg',
			category: 'Food',
			description:
				"In theGrio’s digital series “A Taste of Chocolate,” host Shernay Williams takes viewers on a virtual road trip to visit some of the best Black-owned food businesses in the U.S. In our first season, we sampled food in the nation’s capital, Washington, D.C., historically known as “the Chocolate City.” This season, we’re exploring Los Angeles to introduce you to four popular restaurants you should know. Each episode profiles a Black business owner’s entrepreneurial journey and takes viewers into the kitchen as we taste their signature dishes. A Taste of Chocolate, we go inside Rosalind’s to learn how Gebre-Mariam’s team brings authentic Ethiopian food to Los Angeles, how he inspired the creation of Little Ethiopia, and the proper way to eat from the eatery’s famous 'Emperor' plate, which includes samples of 12 classic Ethiopian dishes.",
		},
		{
			id: 25,
			title: 'Fitness & Travel',
			img: 'https://wallpapercave.com/dwp1x/wp10585589.jpg',
			category: 'Travel',
			description:
				'When most people think of exercise, they usually think of people torturing themselves in a gym with weight machines and running on treadmills like a hamster for hours at a time. Gross. Besides, when you’re traveling, the LAST thing you want to be thinking about is being cooped up in a gym when you should be out exploring your new surroundings. I used to be a gym rat trying to get fit, and it wasn’t until I started traveling that I really had to dig into the motivation behind WHY we should take care of ourselves: So we can do cool activities that remind us why being alive is amazing! We only get one chance on this planet, and we only have one body to do it in, so we should probably take care of ourselves. Luckily, if we can do some basic things and put a few key systems in place while traveling (and when we’re not traveling), we’ll be ready to do whatever, wherever, whenever. Jackpot! This basic strength-training workout is really helpful to having a great experience while traveling. When you strength-train, you build your muscles, joints, and tendons stronger each time — preparing them for any activity you throw at them. Best of all, it’s quick, targets every muscle in your body with just a few functional movements, and can completed anywhere.',
		},
		{
			id: 26,
			title: 'Travel the World',
			img: 'https://wallpapercave.com/dwp1x/wp2003930.jpg',
			category: 'Travel',
			description:
				"Leaving to travel around the world was simply the best decision of our lives! Since that one day in 2012 when we decided around a bottle of wine to travel around the world, our lives have been completely disrupted. We travelled full-time for 19 months from China to South America via Southeast Asia, we made dozens of encounters, discovered places that will remain engraved in our memories, got to know other cultures, other languages... We first traveled at full speed, then slowed down to just take the time... the time to talk, to meet, the time that we often lack in our daily lives. Then we returned to Switzerland, we found good jobs in Zurich... it was the end of a beautiful enchanted break. Except that here we were, we had a first taste for travel, freedom and the infinite flexibility that a round the world trip provides... and 18 months later, what was supposed to happen happened! We resigned again to reopen the parenthesis for good this time. Since then we have taken our work with us in our backpacks and exchanged our pretty Swiss apartment for a way of life that suits us better: the digital nomad lifestyle. Since 2012, we have written and shared many blog posts with you about traveling around the world or long-distance travel. On this page, we've tried to put all this in order to help you find your way through all these years of blogging. We hope you will find a lot of useful information but also inspiration that may help you to take your turn in the adventure of a round the world trip.",
		},
		{
			id: 27,
			title: 'Best Beaches',
			img: 'https://wallpapercave.com/dwp1x/wp4069425.jpg',
			category: 'Travel',
			description:
				'Much of India is surrounded by the ocean, and the country has some incredibly scenic beaches that offer everything from solitude to parties. The best beaches in India can be found on the west coast, with Goa being the most famous beach destination. However, there are other places to consider, especially if you want to get away from the tourist trail. India now has 10 beaches awarded Blue Flag certification by the Foundation for Environmental Education in Denmark. The beaches are Eden, Ghoghla, Golden, Kappad, Kasarkod, Kovalam, Padubidri, Radhanagar, Rushikonda, and Shivrajpur. The Blue Flag certification means these beaches are clean, safe, and environmentally friendly.',
		},
		{
			id: 28,
			title: 'Virtual Tours',
			img: 'https://wallpapercave.com/dwp1x/wp4069431.jpg',
			category: 'Travel',
			description:
				"While there's nothing like setting foot inside an iconic museum and laying eyes on a world-famous sculpture created by a renowned artist centuries ago, it's not always possible to hop on a plane to New York City, Paris, or Florence to tour the gallery halls in person. But there is a way to get a little culture and education while you're at home, gaining inspiration and intel for future trips as well. Google Arts & Culture has teamed up with more than 1,200 museums and galleries around the world to bring anyone and everyone virtual tours and online exhibits of some of the most famous museums around the world. You get to 'go to the museum' and never have to leave your couch. Google Arts & Culture's collection includes The British Museum in London, the Van Gogh Museum in Amsterdam, the Guggenheim in New York City, and literally hundreds more places where you can gain knowledge about art, history, and science. Take a look at just some of Google's top museums that are offering online tours and exhibits. And if you're seeking more thoughtful inspiration from the comfort of your own home, museums around the world are sharing their most zen art on social media. Or, for a dose of nature, you can go 'outside' with incredible virtual tours of some of America's best national parks.",
		},
		{
			id: 29,
			title: '1st Time Flyers',
			img: 'https://wallpapercave.com/dwp1x/wp4069435.jpg',
			category: 'Travel',
			description:
				"There are a few things you should know and familiarise yourself with, to make your first flight as stress-free and comfortable as possible. Here is a guide with all that you need to know, from booking a flight to navigating the airport to getting onto the plane. This will certainly ease your travel fear and get you ready for the journey ahead. Documets required are ID Card, Passport, visa, Boarding pass. Travel documents should be placed in your hand baggage because you may be asked for it anytime for verification of identity. Travel light for an enjoyable journey. If you wish to carry more, check with your airlines on baggage weight allowed before you travel. Each Airline has its own set of guidelines for luggage. Ensure to check with the Airline's website or call the airline regarding the baggage guidelines to avoid the last minute hassles while checking-in at the Airport. Ensure that you do not carry any prohibited items in your baggage or it’ll be confiscated by the officials at the Airport. Upon reaching the Airport, you will be required to show your ID. Officials at the counter will check the required documents to verify your identity. After verification, you will be issued a boarding pass which will have all the details of your travel like Flight number, seat number, scheduled departure time of the flight. Newbie’s word of advice: Make sure to secure the boarding pass along with your travel documents. There’s a chance that you can miss it in the breathtaking experience of making your maiden flight.",
		},
		{
			id: 30,
			title: 'Travelling Continents',
			img: 'https://wallpapercave.com/dwp1x/wp2004052.jpg',
			category: 'Travel',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloremque repudiandae ipsa iusto corporis. Aliquam rerum vitae inventore quis! Ducimus cumque aspernatur, iusto exercitationem sint adipisci soluta illum ipsum nam veniam delectus enim labore dicta minima sed magni, deserunt quasi accusamus aperiam earum fugiat ex? Maiores itaque repudiandae iusto! Inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque qui blanditiis ut itaque dolores cupiditate exercitationem sapiente, assumenda voluptatibus aliquam.\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloremque repudiandae ipsa iusto corporis. Aliquam rerum vitae inventore quis! Ducimus cumque aspernatur, iusto exercitationem sint adipisci soluta illum ipsum nam veniam delectus enim labore dicta minima sed magni, deserunt quasi accusamus aperiam earum fugiat ex? Maiores itaque repudiandae iusto! Inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque qui blanditiis ut itaque dolores cupiditate exercitationem sapiente, assumenda voluptatibus aliquam.',
		},
	]);
	return (
		<>
			<context.Provider value={[data, setData]}>{props.children}</context.Provider>
		</>
	);
};

export default DataContext;
