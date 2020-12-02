// const basicTexts = [
//   "The Simple English Wikipedia is an English language version of Wikipedia, an online encyclopedia, that is written at a basic level of English.",
// ];
//
// // console.log(
// //   JSON.stringify(
// //     Array.from(document.querySelectorAll("p"))
// //       .map((el) => el.innerText)
// //       .join(" ")
// //       .split(/\.\s+/)
// //       .map((s) => {
// //         s = s.trim();
// //         s = s.replace(/\s*\[[^\]]+\]\s*/g, " ");
// //         s = s.replace(/\s*\([^\)]+\)\s*/g, " ");
// //         if (s.match(/[^A-Za-z,'\s]/)) return;
// //         if (s.length < 20) return;
// //         if (s.length > 160) return;
// //         if (s.split(/[A-Z]/).length > 3) return;
// //         s = s.trim() + ".";
// //         return s;
// //       })
// //       .filter(Boolean)
// //   )
// // );
//
// export default basicTexts;

const words = [
  "a",
  "I",
  "am",
  "an",
  "as",
  "at",
  "be",
  "by",
  "do",
  "go",
  "he",
  "if",
  "in",
  "is",
  "it",
  "me",
  "my",
  "no",
  "of",
  "oh",
  "on",
  "or",
  "so",
  "to",
  "up",
  "us",
  "we",
  "act",
  "add",
  "age",
  "ago",
  "air",
  "all",
  "and",
  "any",
  "are",
  "arm",
  "art",
  "ask",
  "bad",
  "bar",
  "bat",
  "bed",
  "big",
  "bit",
  "box",
  "boy",
  "but",
  "buy",
  "can",
  "car",
  "cat",
  "cow",
  "cry",
  "cut",
  "dad",
  "day",
  "did",
  "die",
  "dog",
  "dry",
  "ear",
  "eat",
  "egg",
  "end",
  "eye",
  "far",
  "fat",
  "few",
  "fig",
  "fit",
  "fly",
  "for",
  "fun",
  "gas",
  "get",
  "got",
  "gun",
  "had",
  "has",
  "hat",
  "her",
  "him",
  "his",
  "hit",
  "hot",
  "how",
  "ice",
  "job",
  "joy",
  "key",
  "law",
  "lay",
  "led",
  "leg",
  "let",
  "lie",
  "log",
  "lot",
  "low",
  "man",
  "map",
  "may",
  "men",
  "mix",
  "new",
  "nor",
  "not",
  "now",
  "off",
  "oil",
  "old",
  "one",
  "our",
  "out",
  "own",
  "pay",
  "put",
  "ran",
  "red",
  "row",
  "rub",
  "run",
  "sat",
  "saw",
  "say",
  "sea",
  "see",
  "set",
  "she",
  "sit",
  "six",
  "sky",
  "son",
  "sun",
  "ten",
  "the",
  "tie",
  "too",
  "top",
  "try",
  "two",
  "use",
  "war",
  "was",
  "way",
  "who",
  "why",
  "win",
  "yes",
  "yet",
  "you",
  "able",
  "also",
  "area",
  "atom",
  "baby",
  "back",
  "ball",
  "band",
  "bank",
  "base",
  "bear",
  "beat",
  "been",
  "bell",
  "best",
  "bird",
  "blow",
  "blue",
  "boat",
  "body",
  "bone",
  "book",
  "born",
  "both",
  "burn",
  "busy",
  "call",
  "came",
  "camp",
  "card",
  "care",
  "case",
  "cell",
  "cent",
  "city",
  "coat",
  "cold",
  "come",
  "cook",
  "cool",
  "copy",
  "corn",
  "cost",
  "crop",
  "dark",
  "dead",
  "deal",
  "dear",
  "deep",
  "does",
  "done",
  "door",
  "down",
  "draw",
  "drop",
  "duck",
  "each",
  "ease",
  "east",
  "edge",
  "else",
  "even",
  "ever",
  "face",
  "fact",
  "fair",
  "fall",
  "farm",
  "fast",
  "fear",
  "feed",
  "feel",
  "feet",
  "fell",
  "felt",
  "fill",
  "find",
  "fine",
  "fire",
  "fish",
  "five",
  "flat",
  "flow",
  "food",
  "foot",
  "form",
  "four",
  "free",
  "from",
  "full",
  "game",
  "gave",
  "girl",
  "give",
  "glad",
  "gold",
  "gone",
  "good",
  "gray",
  "grew",
  "grow",
  "hair",
  "half",
  "hand",
  "hard",
  "have",
  "head",
  "hear",
  "heat",
  "held",
  "help",
  "here",
  "high",
  "hill",
  "hold",
  "hole",
  "home",
  "hope",
  "hour",
  "huge",
  "hunt",
  "idea",
  "inch",
  "iron",
  "join",
  "jump",
  "just",
  "keep",
  "kept",
  "kill",
  "kind",
  "king",
  "knew",
  "know",
  "lady",
  "lake",
  "land",
  "last",
  "late",
  "lead",
  "left",
  "less",
  "life",
  "lift",
  "like",
  "line",
  "list",
  "live",
  "lone",
  "long",
  "look",
  "lost",
  "loud",
  "love",
  "made",
  "main",
  "make",
  "many",
  "mark",
  "mass",
  "mean",
  "meat",
  "meet",
  "mile",
  "milk",
  "mind",
  "mine",
  "miss",
  "moon",
  "more",
  "most",
  "move",
  "much",
  "must",
  "name",
  "near",
  "neck",
  "need",
  "next",
  "nine",
  "noon",
  "nose",
  "note",
  "noun",
  "once",
  "only",
  "open",
  "over",
  "page",
  "pair",
  "part",
  "pass",
  "past",
  "path",
  "pick",
  "plan",
  "play",
  "poem",
  "poor",
  "port",
  "pose",
  "post",
  "pull",
  "push",
  "race",
  "rail",
  "rain",
  "read",
  "real",
  "rest",
  "rich",
  "ride",
  "ring",
  "rise",
  "road",
  "rock",
  "roll",
  "room",
  "root",
  "rope",
  "rose",
  "rule",
  "safe",
  "said",
  "sail",
  "salt",
  "same",
  "sand",
  "save",
  "seat",
  "seed",
  "seem",
  "self",
  "sell",
  "send",
  "sent",
  "ship",
  "shoe",
  "shop",
  "show",
  "side",
  "sign",
  "sing",
  "size",
  "skin",
  "slip",
  "slow",
  "snow",
  "soft",
  "soil",
  "some",
  "song",
  "soon",
  "spot",
  "star",
  "stay",
  "step",
  "stop",
  "such",
  "suit",
  "sure",
  "swim",
  "tail",
  "take",
  "talk",
  "tall",
  "team",
  "tell",
  "term",
  "test",
  "than",
  "that",
  "them",
  "then",
  "they",
  "thin",
  "this",
  "thus",
  "time",
  "tiny",
  "tire",
  "told",
  "tone",
  "took",
  "tool",
  "town",
  "tree",
  "trip",
  "true",
  "tube",
  "turn",
  "type",
  "unit",
  "vary",
  "verb",
  "very",
  "view",
  "wait",
  "walk",
  "wall",
  "want",
  "warm",
  "wash",
  "wave",
  "wear",
  "week",
  "well",
  "went",
  "were",
  "west",
  "what",
  "when",
  "wide",
  "wife",
  "wild",
  "will",
  "wind",
  "wing",
  "wire",
  "wish",
  "with",
  "wood",
  "word",
  "work",
  "yard",
  "year",
  "your",
  "about",
  "above",
  "after",
  "again",
  "agree",
  "allow",
  "among",
  "anger",
  "apple",
  "basic",
  "began",
  "begin",
  "black",
  "block",
  "blood",
  "board",
  "bread",
  "break",
  "bring",
  "broad",
  "broke",
  "brown",
  "build",
  "carry",
  "catch",
  "cause",
  "chair",
  "chart",
  "check",
  "chick",
  "chief",
  "child",
  "chord",
  "claim",
  "class",
  "clean",
  "clear",
  "climb",
  "clock",
  "close",
  "cloud",
  "coast",
  "color",
  "could",
  "count",
  "cover",
  "cross",
  "crowd",
  "dance",
  "death",
  "don't",
  "dream",
  "dress",
  "drink",
  "drive",
  "early",
  "earth",
  "eight",
  "enemy",
  "enter",
  "equal",
  "event",
  "every",
  "exact",
  "favor",
  "field",
  "fight",
  "final",
  "first",
  "floor",
  "force",
  "found",
  "fresh",
  "front",
  "fruit",
  "glass",
  "grand",
  "grass",
  "great",
  "green",
  "group",
  "guess",
  "guide",
  "happy",
  "heard",
  "heart",
  "heavy",
  "horse",
  "house",
  "human",
  "hurry",
  "large",
  "laugh",
  "learn",
  "least",
  "leave",
  "level",
  "light",
  "major",
  "match",
  "meant",
  "metal",
  "might",
  "money",
  "month",
  "mount",
  "mouth",
  "music",
  "never",
  "night",
  "noise",
  "north",
  "occur",
  "ocean",
  "offer",
  "often",
  "order",
  "organ",
  "other",
  "paint",
  "paper",
  "party",
  "piece",
  "pitch",
  "place",
  "plain",
  "plane",
  "plant",
  "point",
  "pound",
  "power",
  "press",
  "print",
  "prove",
  "quart",
  "quick",
  "quiet",
  "quite",
  "radio",
  "raise",
  "range",
  "reach",
  "ready",
  "reply",
  "right",
  "river",
  "round",
  "scale",
  "score",
  "sense",
  "serve",
  "seven",
  "shall",
  "shape",
  "share",
  "sharp",
  "sheet",
  "shell",
  "shine",
  "shore",
  "short",
  "shout",
  "sight",
  "since",
  "skill",
  "slave",
  "sleep",
  "small",
  "smell",
  "smile",
  "solve",
  "sound",
  "south",
  "space",
  "speak",
  "speed",
  "spell",
  "spend",
  "spoke",
  "stand",
  "start",
  "state",
  "stead",
  "steam",
  "steel",
  "stick",
  "still",
  "stone",
  "stood",
  "store",
  "story",
  "study",
  "sugar",
  "table",
  "teach",
  "teeth",
  "thank",
  "their",
  "there",
  "these",
  "thick",
  "thing",
  "think",
  "third",
  "those",
  "three",
  "throw",
  "total",
  "touch",
  "track",
  "trade",
  "train",
  "truck",
  "under",
  "until",
  "usual",
  "value",
  "visit",
  "voice",
  "vowel",
  "watch",
  "water",
  "wheel",
  "where",
  "which",
  "while",
  "white",
  "whole",
  "whose",
  "woman",
  "women",
  "won't",
  "world",
  "would",
  "write",
  "wrong",
  "wrote",
  "young",
  "afraid",
  "always",
  "animal",
  "answer",
  "appear",
  "arrive",
  "beauty",
  "before",
  "behind",
  "better",
  "bottom",
  "bought",
  "branch",
  "bright",
  "caught",
  "center",
  "chance",
  "change",
  "charge",
  "choose",
  "circle",
  "clothe",
  "colony",
  "column",
  "common",
  "corner",
  "cotton",
  "course",
  "crease",
  "create",
  "danger",
  "decide",
  "degree",
  "depend",
  "desert",
  "design",
  "differ",
  "direct",
  "divide",
  "doctor",
  "dollar",
  "double",
  "during",
  "effect",
  "either",
  "energy",
  "engine",
  "enough",
  "equate",
  "except",
  "excite",
  "expect",
  "family",
  "famous",
  "father",
  "figure",
  "finger",
  "finish",
  "flower",
  "follow",
  "forest",
  "friend",
  "garden",
  "gather",
  "gentle",
  "govern",
  "ground",
  "happen",
  "insect",
  "invent",
  "island",
  "length",
  "letter",
  "liquid",
  "listen",
  "little",
  "locate",
  "magnet",
  "market",
  "master",
  "matter",
  "melody",
  "method",
  "middle",
  "minute",
  "modern",
  "moment",
  "mother",
  "motion",
  "nation",
  "nature",
  "notice",
  "number",
  "object",
  "office",
  "oxygen",
  "parent",
  "people",
  "period",
  "person",
  "phrase",
  "planet",
  "please",
  "plural",
  "pretty",
  "proper",
  "rather",
  "reason",
  "record",
  "region",
  "repeat",
  "result",
  "school",
  "search",
  "season",
  "second",
  "select",
  "settle",
  "should",
  "silent",
  "silver",
  "simple",
  "single",
  "sister",
  "speech",
  "spread",
  "spring",
  "square",
  "stream",
  "street",
  "string",
  "strong",
  "sudden",
  "suffix",
  "summer",
  "supply",
  "symbol",
  "system",
  "though",
  "toward",
  "travel",
  "twenty",
  "valley",
  "weight",
  "window",
  "winter",
  "wonder",
  "yellow",
  "against",
  "arrange",
  "believe",
  "between",
  "brother",
  "brought",
  "capital",
  "captain",
  "century",
  "certain",
  "collect",
  "company",
  "compare",
  "connect",
  "contain",
  "control",
  "correct",
  "country",
  "current",
  "decimal",
  "develop",
  "discuss",
  "distant",
  "element",
  "evening",
  "example",
  "forward",
  "general",
  "history",
  "hundred",
  "imagine",
  "include",
  "instant",
  "machine",
  "measure",
  "million",
  "morning",
  "natural",
  "nothing",
  "numeral",
  "observe",
  "operate",
  "pattern",
  "perhaps",
  "picture",
  "prepare",
  "present",
  "problem",
  "process",
  "produce",
  "product",
  "protect",
  "provide",
  "receive",
  "require",
  "science",
  "section",
  "segment",
  "several",
  "similar",
  "soldier",
  "special",
  "station",
  "strange",
  "stretch",
  "student",
  "subject",
  "success",
  "suggest",
  "support",
  "surface",
  "thought",
  "through",
  "trouble",
  "village",
  "weather",
  "whether",
  "written",
  "children",
  "complete",
  "consider",
  "continue",
  "describe",
  "division",
  "electric",
  "exercise",
  "fraction",
  "indicate",
  "industry",
  "interest",
  "language",
  "material",
  "molecule",
  "mountain",
  "multiply",
  "neighbor",
  "opposite",
  "original",
  "populate",
  "position",
  "possible",
  "practice",
  "probable",
  "property",
  "question",
  "quotient",
  "remember",
  "sentence",
  "separate",
  "shoulder",
  "solution",
  "straight",
  "subtract",
  "surprise",
  "syllable",
  "thousand",
  "together",
  "triangle",
  "character",
  "condition",
  "consonant",
  "continent",
  "determine",
  "difficult",
  "necessary",
  "paragraph",
  "represent",
  "substance",
  "dictionary",
  "especially",
  "experience",
  "experiment",
  "instrument",
  "particular",
  "temperature",
];
export default words;