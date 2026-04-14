export interface Module {
  id: string;
  title: string;
  description: string;
  content: string;
}

export const modules: Module[] = [
  {
    id: "intro",
    title: "What AI is and Is Not",
    description: "Laying the foundation of understanding artificial intelligence.",
    content: `
      <h2>The New Frontier</h2>
      <p>Artificial Intelligence (AI) has moved from science fiction to our daily lives. For residents of Park City, understanding AI isn't just about keeping up with tech—it's about enhancing how we connect with our community, manage our lives, and explore new hobbies.</p>
      
      <h3>Why It Matters</h3>
      <p>Imagine you're trying to find a specific past event in the Newcomers Club archives, or you want to draft a complex letter to the city council about local trails. AI can do the "heavy lifting" of organizing information and drafting text, leaving you with more time to enjoy the views at Deer Valley.</p>

      <h3>What AI Is</h3>
      <p>Think of AI as a very advanced, high-speed pattern recognition tool. It has been trained on a vast amount of human knowledge and can predict what should come next in a conversation, an image, or a calculation.</p>
      <ul>
        <li><strong>A Personal Assistant:</strong> It can summarize long articles, draft emails, or plan a detailed travel itinerary for your next trip to the Uintas.</li>
        <li><strong>A Research Partner:</strong> It can find information faster than a traditional search engine and explain complex topics in simple terms.</li>
        <li><strong>A Creative Spark:</strong> It can help you brainstorm ideas for the Newcomers Club's next monthly luncheon.</li>
      </ul>

      <h3>What AI Is Not</h3>
      <p>It is important to remember the limitations. AI is not "human" and it does not "think" the way we do.</p>
      <ul>
        <li><strong>It is not Sentient:</strong> AI doesn't have feelings, personal beliefs, or a soul. It's software.</li>
        <li><strong>It is not Infallible:</strong> Sometimes AI "hallucinates," meaning it confidently states something that is factually incorrect. Always verify important details.</li>
        <li><strong>It is not a Replacement for Human Connection:</strong> AI can help us organize our club meetings, but it can never replace the warmth of a face-to-face greeting at a Newcomers social.</li>
      </ul>

      <blockquote>"AI is like a bicycle for the mind—it helps you go further, faster, but you are still the one steering."</blockquote>
    `
  },
  {
    id: "chatbots",
    title: "Getting Started with Chatbots",
    description: "A directory of the most popular AI tools and how to access them.",
    content: `
      <h2>Meet Your New Assistants</h2>
      <p>There are several major "chatbots" available today. Each has its own strengths. Here is your quick guide to the best ones:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div class="p-4 border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
          <h3 class="font-bold text-xl mb-2">ChatGPT (OpenAI)</h3>
          <p class="text-sm mb-4">The most famous AI. Great for creative writing, general questions, and complex reasoning.</p>
          <a href="https://chatgpt.com" target="_blank" class="text-primary font-semibold hover:underline">Try ChatGPT →</a>
        </div>
        <div class="p-4 border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
          <h3 class="font-bold text-xl mb-2">Claude (Anthropic)</h3>
          <p class="text-sm mb-4">Known for being helpful, honest, and harmless. It has a very natural writing style and is excellent for long documents.</p>
          <a href="https://claude.ai" target="_blank" class="text-primary font-semibold hover:underline">Try Claude →</a>
        </div>
        <div class="p-4 border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
          <h3 class="font-bold text-xl mb-2">Perplexity AI</h3>
          <p class="text-sm mb-4">The "Search AI." It provides answers with citations and links to original sources. Perfect for research.</p>
          <a href="https://perplexity.ai" target="_blank" class="text-primary font-semibold hover:underline">Try Perplexity →</a>
        </div>
        <div class="p-4 border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
          <h3 class="font-bold text-xl mb-2">Gemini (Google)</h3>
          <p class="text-sm mb-4">Google's AI. It's integrated with Google Docs, Gmail, and has access to real-time information.</p>
          <a href="https://gemini.google.com" target="_blank" class="text-primary font-semibold hover:underline">Try Gemini →</a>
        </div>
        <div class="p-4 border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
          <h3 class="font-bold text-xl mb-2">Copilot (Microsoft)</h3>
          <p class="text-sm mb-4">Integrated into Windows and Office. Very useful if you use Microsoft Word or Excel frequently.</p>
          <a href="https://copilot.microsoft.com" target="_blank" class="text-primary font-semibold hover:underline">Try Copilot →</a>
        </div>
        <div class="p-4 border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
          <h3 class="font-bold text-xl mb-2">Grok (xAI)</h3>
          <p class="text-sm mb-4">Built by Elon Musk's company, Grok is designed to be witty and has real-time access to X (formerly Twitter) data.</p>
          <a href="https://x.ai" target="_blank" class="text-primary font-semibold hover:underline">Try Grok →</a>
        </div>
      </div>
    `
  },
  {
    id: "prompting-pc",
    title: "What is Prompting?",
    description: "Learn how to talk to AI using local Park City examples.",
    content: `
      <h2>The Art of the Ask</h2>
      <p>A "prompt" is simply the instruction or question you give to an AI. Think of it like a recipe: the better the ingredients (information), the better the result.</p>
      
      <h3>Park City Newcomers Examples</h3>
      <p>Let's use the <strong>Park City Newcomers Club</strong> website as our inspiration. Here is how we can use AI to interact with club information:</p>

      <div class="space-y-6 my-8">
        <div class="p-6 bg-muted/50 rounded-xl border border-primary/10">
          <h4 class="font-bold text-primary mb-2 italic">Prompt Example 1: Summarizing Events</h4>
          <p class="copy-prompt text-sm font-mono bg-background p-3 rounded border mb-4">
            "Go to parkcitynewcomers.org and look at the interest groups. I am interested in hiking and book clubs. Can you summarize when they meet and who the contact person is?"
          </p>
          <p class="text-sm text-foreground/70"><strong>Why it works:</strong> It's specific about what you want and where the information should come from.</p>
        </div>

        <div class="p-6 bg-muted/50 rounded-xl border border-primary/10">
          <h4 class="font-bold text-primary mb-2 italic">Prompt Example 2: Drafting Communications</h4>
          <p class="copy-prompt text-sm font-mono bg-background p-3 rounded border mb-4">
            "I want to send an email to the Newcomers Club membership about our upcoming holiday party at the Canyons. Make it sound warm, welcoming, and include a reminder about the RSVP deadline."
          </p>
          <p class="text-sm text-foreground/70"><strong>Why it works:</strong> It sets the "tone" (warm, welcoming) and specifies key details (Canyons, RSVP).</p>
        </div>
      </div>
    `
  },
  {
    id: "improve-prompts",
    title: "Creating and Improving Prompts",
    description: "Techniques to get the most accurate and useful responses.",
    content: `
      <h2>The 'R-A-S' Framework</h2>
      <p>To get the best results, use this simple framework for your prompts:</p>
      
      <ul>
        <li><strong>Role:</strong> Tell the AI who it should be. "Act as a professional event planner."</li>
        <li><strong>Action:</strong> Tell it exactly what to do. "Write a detailed itinerary."</li>
        <li><strong>Specifics:</strong> Give it constraints. "Keep it under 300 words and use bullet points."</li>
      </ul>

      <h3>Good, Better, Best: Seeing R-A-S in Action</h3>
      <p>Let's look at how the same request improves as you add more elements of the R-A-S framework. The goal: plan a hike for the Newcomers Club.</p>

      <div class="space-y-6 my-8">
        <div class="p-5 rounded-xl border-l-4" style="background: hsl(30 22% 91% / 0.5); border-color: hsl(20 8% 60%);">
          <span class="text-xs font-bold uppercase tracking-wider" style="color: hsl(20 8% 50%);">Good — No R-A-S</span>
          <p class="mt-2 text-lg" style="font-family: var(--font-reading);">"Give me some hiking ideas near Park City."</p>
          <p class="mt-3 text-sm" style="font-family: var(--font-reading); color: hsl(20 8% 42%);">This works, but the AI has to guess what kind of hike, who it's for, and what format you want. You'll likely get a generic list.</p>
        </div>

        <div class="p-5 rounded-xl border-l-4" style="background: hsl(150 30% 28% / 0.04); border-color: hsl(150 30% 28% / 0.4);">
          <span class="text-xs font-bold uppercase tracking-wider" style="color: hsl(150 30% 28%);">Better — Role + Action</span>
          <p class="mt-2 text-lg" style="font-family: var(--font-reading);">"Act as an experienced Park City trail guide. Suggest three easy-to-moderate hikes suitable for a group of adults who are not expert hikers."</p>
          <p class="mt-3 text-sm" style="font-family: var(--font-reading); color: hsl(20 8% 42%);">Now the AI knows <strong>who to be</strong> (Role) and <strong>what to do</strong> (Action). The results will be much more relevant and tailored.</p>
        </div>

        <div class="p-5 rounded-xl border-l-4" style="background: hsl(150 30% 28% / 0.07); border-color: hsl(150 30% 28%);">
          <span class="text-xs font-bold uppercase tracking-wider" style="color: hsl(150 30% 28%);">Best — Role + Action + Specifics</span>
          <p class="copy-prompt mt-2 text-lg" style="font-family: var(--font-reading);">"Act as an experienced Park City trail guide. Suggest three easy-to-moderate hikes suitable for a group of adults in their 50s and 60s who enjoy nature but prefer well-marked trails. For each hike, include the trail name, distance, estimated time, and whether dogs are allowed. Format as a table."</p>
          <p class="mt-3 text-sm" style="font-family: var(--font-reading); color: hsl(20 8% 42%);">This adds <strong>Specifics</strong>: the audience age, trail preferences, exactly what details to include, and the output format. The AI now has everything it needs to give you a polished, ready-to-share response.</p>
        </div>
      </div>

      <h3>Iterative Prompting</h3>
      <p>Don't stop at the first answer! You can talk back to the AI to improve the results:</p>
      <ul>
        <li>"That's a good start, but can you make it more informal?"</li>
        <li>"Can you add a section about parking at the Library Center?"</li>
        <li>"Actually, remove the mention of the dinner and focus only on the cocktail hour."</li>
      </ul>
    `
  },
  {
    id: "workflows",
    title: "Brainstorm, Research, & Create",
    description: "Practical ways to use AI for your projects.",
    content: `
      <h2>Real-World AI Workflows</h2>
      <p>AI is more than just a chat—it's a production tool. Here are three ways to use it today:</p>

      <div class="space-y-8 my-8">
        <section class="p-6 bg-secondary/30 rounded-2xl border">
          <h3 class="text-2xl font-bold mb-3">1. Brainstorming</h3>
          <p>Stuck on an idea? Ask AI for 10 variations. "Give me 10 creative themes for a summer picnic at Kimball Junction."</p>
          <p class="copy-prompt mt-4 text-sm text-muted-foreground italic">Try this: "I'm hosting a Newcomers bridge club meeting. What are some fun, easy snacks that are also elegant?"</p>
        </section>

        <section class="p-6 bg-secondary/30 rounded-2xl border">
          <h3 class="text-2xl font-bold mb-3">2. Researching</h3>
          <p>Use Perplexity or Gemini to find facts. "What are the best dog-friendly trails in Park City that are under 3 miles long?"</p>
          <p class="copy-prompt mt-4 text-sm text-muted-foreground italic">Try this: "Explain the current parking regulations for Main Street in Park City during the winter season."</p>
        </section>

        <section class="p-6 bg-secondary/30 rounded-2xl border">
          <h3 class="text-2xl font-bold mb-3">3. Creating Artifacts</h3>
          <p>AI can create "Artifacts" or documents. You can ask Claude to write a full spreadsheet of club dues or a beautifully formatted newsletter template.</p>
          <p class="copy-prompt mt-4 text-sm text-muted-foreground italic">Try this: "Write a 3-paragraph welcome letter for new members joining the Park City Newcomers Club."</p>
        </section>
      </div>
    `
  },
  {
    id: "notebooklm",
    title: "Quick Guide to NotebookLM",
    description: "Google's powerful tool for analyzing your own documents.",
    content: `
      <h2>Your Personal Research Assistant</h2>
      <p>NotebookLM is a specialized AI from Google that only looks at the documents <em>you</em> upload. It's like having an expert who has read every file in your folder — and can create polished materials from them.</p>

      <h3>Getting Started</h3>
      <ol class="list-decimal pl-6 space-y-4 mb-6">
        <li><strong>Create a Notebook:</strong> Go to notebooklm.google.com and start a new notebook.</li>
        <li><strong>Upload Sources:</strong> Add your PDFs, text files, Google Docs, or website links (like the Newcomers Bylaws).</li>
        <li><strong>Ask or Generate:</strong> Chat with your documents, or use one of the powerful output tools below.</li>
      </ol>

      <h3>What NotebookLM Can Create</h3>
      <p>Upload your documents and NotebookLM can produce any of these artifacts:</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div class="p-5 border rounded-xl" style="background: hsl(35 30% 98%);">
          <strong style="color: hsl(150, 30%, 28%);">Audio Overview</strong>
          <p class="text-sm mt-2">A podcast-style conversation between two AI hosts who discuss your documents. Perfect for listening while driving down Marsac Ave or walking the Rail Trail.</p>
        </div>
        <div class="p-5 border rounded-xl" style="background: hsl(35 30% 98%);">
          <strong style="color: hsl(150, 30%, 28%);">Video Overview</strong>
          <p class="text-sm mt-2">A short video summary with visuals and narration — great for sharing a topic overview at a club meeting.</p>
        </div>
        <div class="p-5 border rounded-xl" style="background: hsl(35 30% 98%);">
          <strong style="color: hsl(150, 30%, 28%);">Mind Map</strong>
          <p class="text-sm mt-2">A visual diagram showing how concepts in your documents connect to each other. Wonderful for seeing the "big picture."</p>
        </div>
        <div class="p-5 border rounded-xl" style="background: hsl(35 30% 98%);">
          <strong style="color: hsl(150, 30%, 28%);">Infographic</strong>
          <p class="text-sm mt-2">A beautifully designed visual summary with key facts and figures laid out in a single graphic you can share or print.</p>
        </div>
        <div class="p-5 border rounded-xl" style="background: hsl(35 30% 98%);">
          <strong style="color: hsl(150, 30%, 28%);">Presentation</strong>
          <p class="text-sm mt-2">A slide deck generated from your sources. Just upload a document and get a ready-to-present slideshow.</p>
        </div>
        <div class="p-5 border rounded-xl" style="background: hsl(35 30% 98%);">
          <strong style="color: hsl(150, 30%, 28%);">Flashcards &amp; Quizzes</strong>
          <p class="text-sm mt-2">Study aids that test your knowledge of the uploaded material. Great for learning something new or reviewing minutes from meetings.</p>
        </div>
      </div>

      <h3>The NotebookLM Interface</h3>
      <p>Here's a map of the main screen so you know where everything lives:</p>

      <div class="my-8 p-6 border-2 rounded-2xl" style="border-color: hsl(30, 15%, 85%); background: hsl(35 30% 98%);">
        <div class="text-xs font-bold uppercase tracking-wider mb-4 text-center" style="color: hsl(20, 8%, 42%);">NotebookLM Interface Overview</div>

        <div class="flex gap-4" style="min-height: 260px;">
          <div class="w-1/3 border rounded-xl p-4" style="background: hsl(30, 18%, 94%); border-color: hsl(30, 12%, 86%);">
            <div class="text-xs font-bold uppercase tracking-wider mb-3" style="color: hsl(20, 8%, 50%);">Sources</div>
            <div class="space-y-2">
              <div class="flex items-center gap-2 p-2 rounded-lg" style="background: hsl(35 30% 98%);">
                <div class="w-6 h-6 rounded flex items-center justify-center text-xs" style="background: hsl(150 30% 28% / 0.1); color: hsl(150, 30%, 28%);">PDF</div>
                <span class="text-xs">Newcomers-Bylaws.pdf</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded-lg" style="background: hsl(35 30% 98%);">
                <div class="w-6 h-6 rounded flex items-center justify-center text-xs" style="background: hsl(25 55% 48% / 0.1); color: hsl(25, 55%, 48%);">WEB</div>
                <span class="text-xs">parkcitynewcomers.org</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded-lg" style="background: hsl(35 30% 98%);">
                <div class="w-6 h-6 rounded flex items-center justify-center text-xs" style="background: hsl(200 25% 40% / 0.1); color: hsl(200, 25%, 40%);">DOC</div>
                <span class="text-xs">meeting-minutes.doc</span>
              </div>
              <div class="flex items-center justify-center p-2 rounded-lg border-2 border-dashed text-xs" style="border-color: hsl(30, 15%, 85%); color: hsl(20, 8%, 50%);">+ Add source</div>
            </div>
          </div>

          <div class="flex-1 flex flex-col gap-4">
            <div class="flex-1 border rounded-xl p-4" style="background: hsl(35 30% 98%); border-color: hsl(30, 12%, 86%);">
              <div class="text-xs font-bold uppercase tracking-wider mb-3" style="color: hsl(20, 8%, 50%);">Chat — Ask anything about your sources</div>
              <div class="rounded-lg p-3 mb-3" style="background: hsl(30, 18%, 94%);">
                <div class="text-sm mb-1"><strong>You:</strong> What are the membership dues?</div>
                <div class="text-sm" style="color: hsl(150, 30%, 28%);"><strong>NotebookLM:</strong> According to the Bylaws, annual dues are $35 per household...</div>
              </div>
              <div class="flex items-center gap-2 p-2 rounded-lg border" style="border-color: hsl(30, 15%, 85%);">
                <span class="text-xs" style="color: hsl(20, 8%, 50%);">Ask about your sources...</span>
              </div>
            </div>

            <div class="border rounded-xl p-3" style="background: hsl(30, 18%, 94%); border-color: hsl(30, 12%, 86%);">
              <div class="text-xs font-bold uppercase tracking-wider mb-2" style="color: hsl(20, 8%, 50%);">Create — Output Tools</div>
              <div class="flex flex-wrap gap-2">
                <span class="text-xs px-3 py-1.5 rounded-full font-semibold" style="background: hsl(150, 30%, 28%); color: white;">Audio Overview</span>
                <span class="text-xs px-3 py-1.5 rounded-full font-semibold" style="background: hsl(150, 30%, 28%); color: white;">Video</span>
                <span class="text-xs px-3 py-1.5 rounded-full font-semibold" style="background: hsl(150, 30%, 28%); color: white;">Mind Map</span>
                <span class="text-xs px-3 py-1.5 rounded-full font-semibold" style="background: hsl(150, 30%, 28%); color: white;">Infographic</span>
                <span class="text-xs px-3 py-1.5 rounded-full font-semibold" style="background: hsl(150, 30%, 28%); color: white;">Presentation</span>
                <span class="text-xs px-3 py-1.5 rounded-full font-semibold" style="background: hsl(150, 30%, 28%); color: white;">Flashcards</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Real-World Scenarios</h3>

      <div class="space-y-6 my-8">
        <div class="p-6 rounded-2xl border" style="background: hsl(150 30% 28% / 0.04); border-color: hsl(150 30% 28% / 0.15);">
          <h4 class="font-bold text-xl mb-2" style="color: hsl(150, 30%, 28%);">Scenario 1: Prep for a Board Meeting</h4>
          <p>Upload the last six months of board meeting minutes. Generate an <strong>Audio Overview</strong> to listen to a summary on your way to the meeting. Use the <strong>Mind Map</strong> to see what topics came up most often.</p>
        </div>

        <div class="p-6 rounded-2xl border" style="background: hsl(25 55% 48% / 0.05); border-color: hsl(25 55% 48% / 0.2);">
          <h4 class="font-bold text-xl mb-2" style="color: hsl(25, 55%, 48%);">Scenario 2: Welcome New Members</h4>
          <p>Upload the Newcomers Club bylaws, interest group list, and event calendar. Ask NotebookLM to create a <strong>Presentation</strong> you can show at the next welcome coffee. Print the <strong>Infographic</strong> as a handout.</p>
        </div>

        <div class="p-6 rounded-2xl border" style="background: hsl(35 20% 93% / 0.5); border-color: hsl(30, 15%, 85%);">
          <h4 class="font-bold text-xl mb-2">Scenario 3: Research a Big Decision</h4>
          <p>Planning a venue for the holiday gala? Upload proposals from three different venues plus your budget spreadsheet. Ask NotebookLM to compare them side-by-side, then generate <strong>Flashcards</strong> to quiz yourself on the key details before the vote.</p>
        </div>
      </div>

      <h3>Tips &amp; Tricks</h3>

      <div class="my-8 space-y-4">
        <div class="flex items-start gap-4 p-4 rounded-xl" style="background: hsl(35 30% 98%); border: 1px solid hsl(30, 15%, 85%);">
          <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style="background: hsl(150, 30%, 28%); color: white;">1</div>
          <div><strong>Name your notebook clearly.</strong> You can have multiple notebooks — one for "Board Meetings," one for "Event Planning," etc. Keep them organized.</div>
        </div>
        <div class="flex items-start gap-4 p-4 rounded-xl" style="background: hsl(35 30% 98%); border: 1px solid hsl(30, 15%, 85%);">
          <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style="background: hsl(150, 30%, 28%); color: white;">2</div>
          <div><strong>Upload multiple sources.</strong> The magic happens when NotebookLM connects information across several documents. Try uploading 3-5 files at once.</div>
        </div>
        <div class="flex items-start gap-4 p-4 rounded-xl" style="background: hsl(35 30% 98%); border: 1px solid hsl(30, 15%, 85%);">
          <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style="background: hsl(150, 30%, 28%); color: white;">3</div>
          <div><strong>Customize your Audio Overview.</strong> Before generating, you can give instructions like "Focus on the budget section" or "Explain it for someone who has never attended a meeting."</div>
        </div>
        <div class="flex items-start gap-4 p-4 rounded-xl" style="background: hsl(35 30% 98%); border: 1px solid hsl(30, 15%, 85%);">
          <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style="background: hsl(150, 30%, 28%); color: white;">4</div>
          <div><strong>It only knows what you give it.</strong> NotebookLM will not make things up from the internet — it stays within your uploaded files. That makes it very trustworthy for factual answers.</div>
        </div>
        <div class="flex items-start gap-4 p-4 rounded-xl" style="background: hsl(35 30% 98%); border: 1px solid hsl(30, 15%, 85%);">
          <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style="background: hsl(150, 30%, 28%); color: white;">5</div>
          <div><strong>Pin important notes.</strong> You can save key answers as "Notes" inside your notebook so they're easy to find later — like bookmarking a page in a book.</div>
        </div>
      </div>

      <a href="https://notebooklm.google.com" target="_blank" class="inline-block px-8 py-4 rounded-full font-bold text-lg transition-opacity hover:opacity-90" style="background: hsl(150, 30%, 28%); color: white;">Launch NotebookLM →</a>
    `
  },
  {
    id: "glossary",
    title: "The AI Glossary",
    description: "25 essential terms to help you navigate the AI world.",
    content: `
      <h2>AI Terms for Newcomers</h2>
      <p>This glossary will help you decode the tech-talk you might hear in the news or from your tech-savvy grandchildren.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">1. Agent:</strong>
          <span class="text-sm block mt-1">An AI capable of taking actions to complete a goal, like booking a flight.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">2. AI (Artificial Intelligence):</strong>
          <span class="text-sm block mt-1">Computer systems designed to perform tasks that normally require human intelligence.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">3. Algorithm:</strong>
          <span class="text-sm block mt-1">A step-by-step set of instructions for a computer to follow.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">4. API:</strong>
          <span class="text-sm block mt-1">A way for different software programs to communicate and share data.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">5. Artifact:</strong>
          <span class="text-sm block mt-1">A separate, high-quality document or piece of code produced by the AI.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">6. Bias:</strong>
          <span class="text-sm block mt-1">The tendency of an AI to produce results that reflect prejudices in its training data.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">7. Chatbot:</strong>
          <span class="text-sm block mt-1">A program you interact with via conversation, like texting a person.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">8. Context Window:</strong>
          <span class="text-sm block mt-1">The amount of information an AI can "keep in mind" during a single conversation.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">9. Dataset:</strong>
          <span class="text-sm block mt-1">The collection of information used to train an AI model.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">10. Deepfake:</strong>
          <span class="text-sm block mt-1">A synthetic image or video that realistically depicts someone doing or saying something they didn't.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">11. Ethics:</strong>
          <span class="text-sm block mt-1">The study of the moral implications and safety of AI development.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">12. Fine-tuning:</strong>
          <span class="text-sm block mt-1">A process to make a general AI model an expert in a specific topic.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">13. Generative AI:</strong>
          <span class="text-sm block mt-1">AI that can create entirely new content like text, images, or music.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">14. Hallucination:</strong>
          <span class="text-sm block mt-1">When an AI gives a confidently stated but factually incorrect answer.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">15. LLM (Large Language Model):</strong>
          <span class="text-sm block mt-1">The complex math models trained on massive text data that power chatbots.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">16. Multimodal:</strong>
          <span class="text-sm block mt-1">AI that can process multiple types of input, such as images, audio, and text.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">17. Neural Network:</strong>
          <span class="text-sm block mt-1">A computing system inspired by the biological networks of the human brain.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">18. NLP:</strong>
          <span class="text-sm block mt-1">Natural Language Processing—the technology that helps computers understand human language.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">19. Parameters:</strong>
          <span class="text-sm block mt-1">The "knobs and dials" inside an AI model that represent its learned knowledge.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">20. Plugin:</strong>
          <span class="text-sm block mt-1">An add-on that gives a chatbot new skills, like searching for flights or solving math.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">21. Prompt:</strong>
          <span class="text-sm block mt-1">The instruction or question you provide to an AI to get a response.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">22. Sentiment Analysis:</strong>
          <span class="text-sm block mt-1">AI that can detect the emotional tone (positive, negative, etc.) of a piece of text.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">23. Token:</strong>
          <span class="text-sm block mt-1">A small unit of data an AI processes, roughly equivalent to four letters of English text.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">24. Turing Test:</strong>
          <span class="text-sm block mt-1">A classic test to see if a machine's behavior is indistinguishable from a human's.</span>
        </div>
        <div class="p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
          <strong class="text-primary">25. Zero-shot:</strong>
          <span class="text-sm block mt-1">When an AI successfully performs a task it wasn't specifically shown how to do.</span>
        </div>
      </div>
    `
  }
];
