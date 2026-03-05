import { NextResponse } from "next/server";

const responses: Record<string, string[]> = {
  Lawyers: [
    "Based on the legal precedents, your situation falls under contract law. I'd recommend documenting everything and consulting with a local attorney for jurisdiction-specific advice.",
    "This is a common legal question. Generally, the statute of limitations varies by state, but you typically have 2-6 years to file a civil claim.",
    "From a legal standpoint, you have several options. The most cost-effective approach would be to start with a demand letter before considering litigation.",
    "Your rights are protected under consumer protection laws. I'd suggest filing a complaint with your state's attorney general office as a first step.",
    "This appears to be a landlord-tenant dispute. Most states require landlords to return security deposits within 30 days and provide an itemized list of deductions.",
  ],
  Doctors: [
    "Based on the symptoms you've described, this sounds like it could be related to seasonal allergies. However, I'd recommend scheduling an appointment with your primary care physician for a proper diagnosis.",
    "Staying hydrated, getting adequate sleep, and maintaining a balanced diet are the cornerstones of managing this condition. Over-the-counter remedies can help with immediate relief.",
    "These symptoms are quite common and usually not cause for concern. However, if they persist for more than two weeks, I'd strongly recommend getting a professional evaluation.",
    "From a medical perspective, regular exercise and stress management can significantly improve your overall well-being. Start with 30 minutes of moderate activity daily.",
    "It's important to monitor these symptoms closely. Keep a journal tracking when they occur and any potential triggers — this information will be invaluable for your doctor.",
  ],
  Mechanics: [
    "That sound you're describing is likely coming from the brake pads. They may be worn and need replacement — this is a routine maintenance item that shouldn't be too costly.",
    "Based on your description, this could be a transmission issue. I'd recommend getting a diagnostic scan to identify the exact error codes before proceeding with repairs.",
    "The check engine light can indicate many things, from a loose gas cap to a more serious issue. Don't panic — get an OBD-II scan first to narrow it down.",
    "For the mileage you mentioned, it's likely time for a timing belt replacement. Delaying this service could lead to much more expensive engine damage.",
    "This is a common issue with that make and model. The fix is usually straightforward — replacing the oxygen sensor should resolve the problem and improve your fuel economy.",
  ],
  "Electronics Techs": [
    "This issue is typically caused by outdated drivers. Try updating your device drivers through the manufacturer's website for the most stable version.",
    "Based on what you're describing, it sounds like a RAM issue. Try reseating your memory modules first — this simple fix resolves the problem about 60% of the time.",
    "The slow performance you're experiencing is likely due to insufficient storage space. I'd recommend clearing temporary files and considering an SSD upgrade for a significant speed boost.",
    "This connectivity problem is usually related to your router settings. Try resetting your router to factory defaults and reconfiguring your network with WPA3 security.",
    "For that error message, the solution is usually a clean reinstall of the software. Make sure to back up your data first, then download the latest version from the official site.",
  ],
  Nutritionists: [
    "For your goals, I'd recommend focusing on whole foods — lean proteins, complex carbohydrates, and healthy fats. A Mediterranean-style diet is well-supported by research.",
    "Based on your dietary needs, incorporating more fiber-rich foods like legumes, whole grains, and vegetables can make a significant difference in your digestive health.",
    "Meal prepping is one of the most effective strategies for maintaining a healthy diet. Start with preparing 3-4 meals ahead on weekends to stay consistent during the week.",
    "Hydration is often overlooked but crucial. Aim for at least 8 glasses of water daily, and consider adding electrolytes if you're physically active.",
    "Rather than eliminating food groups entirely, focus on balance and portion control. Each meal should ideally contain protein, healthy fats, and colorful vegetables.",
  ],
  "Travel Advisors": [
    "For that destination, I'd recommend visiting during the shoulder season — you'll enjoy better weather, fewer crowds, and significantly lower prices on accommodations.",
    "Based on your budget, I'd suggest looking into vacation packages that bundle flights and hotels. You can often save 30-40% compared to booking separately.",
    "Travel insurance is absolutely worth it for international trips. Look for policies that cover medical emergencies, trip cancellation, and lost baggage at minimum.",
    "For the best local experience, I'd recommend staying in locally-owned boutique hotels or reputable vacation rentals rather than large chain hotels in tourist areas.",
    "That region has excellent public transportation, so you won't need a rental car. Get a multi-day transit pass — it's the most economical and authentic way to explore.",
  ],
  "Financial Advisors": [
    "Based on your financial situation, I'd recommend starting with an emergency fund covering 3-6 months of expenses before focusing on investments.",
    "For long-term wealth building, a diversified portfolio of low-cost index funds is hard to beat. Consider a split between domestic stocks, international stocks, and bonds based on your risk tolerance.",
    "Tax-advantaged accounts should be your priority. Max out your 401(k) match first, then contribute to a Roth IRA before investing in taxable accounts.",
    "Debt management is crucial. Focus on paying off high-interest debt first using the avalanche method — this saves you the most money in interest over time.",
    "For your retirement timeline, you're on a good track. I'd suggest increasing your savings rate by 1% each year — you'll barely notice the difference but it compounds significantly.",
  ],
  "Fitness Coaches": [
    "For your fitness level, I'd recommend starting with 3 days of strength training and 2 days of moderate cardio. Progressive overload is key — increase weights gradually each week.",
    "Recovery is just as important as the workout itself. Make sure you're getting 7-9 hours of sleep and incorporating stretching or yoga on rest days.",
    "Based on your goals, compound exercises like squats, deadlifts, and bench press will give you the most results for your time. Focus on form before adding weight.",
    "Consistency beats intensity every time. A sustainable 30-minute daily routine will deliver better results than sporadic intense sessions followed by long breaks.",
    "Don't neglect mobility work. Spending 10 minutes on dynamic stretching before workouts and foam rolling afterward can prevent injuries and improve your performance significantly.",
  ],
};

const genericResponses = [
  "That's a great question! Based on my expertise, I'd recommend starting with thorough research on this topic. There are several approaches you could take, and the best one depends on your specific circumstances.",
  "I've seen this question come up frequently. The key is to break it down into manageable steps and tackle each one systematically. Would you like me to walk you through a detailed approach?",
  "From my professional experience, this is a situation where careful planning pays off. I'd suggest gathering all relevant information first, then creating an action plan with clear milestones.",
  "This is an interesting challenge. The most effective solution usually involves a combination of approaches. Let me outline the main strategies that have worked well for others in similar situations.",
  "Based on what you've shared, you're on the right track. Here are a few additional recommendations that could help you achieve better results more efficiently.",
];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, expert } = body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    // Simulate network delay (1–2 seconds)
    await sleep(1000 + Math.random() * 1000);

    const pool = (expert && responses[expert]) || genericResponses;
    const answer = pool[Math.floor(Math.random() * pool.length)];

    const reply = `Regarding your question: "${message.trim()}"\n\n${answer}`;

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }
}
