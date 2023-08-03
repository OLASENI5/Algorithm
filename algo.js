/**
Algorithm: SentenceAnalysis

Input:
sentence (string) # A sentence that ends with a point ('.')

Output:
length (integer)   # Length of the sentence (number of characters)
word_count (integer) # Number of words in the sentence
vowel_count (integer) # Number of vowels in the sentence

begin
# Initialize variables
length := 0
word_count := 0
vowel_count := 0
inside_word := false

# Loop through each character in the sentence
for character in sentence do
    length := length + 1 # Increment the character count (length)

    # Check if the character is a letter (alphabet) and not a space
    if is_alphabet(character) and character ≠ ' ' then
    if not inside_word then
        word_count := word_count + 1 # Increment the word count if a new word starts
        inside_word := true
    end if

    # Check if the character is a vowel
    if is_vowel(character) then
        vowel_count := vowel_count + 1 # Increment vowel count if character is a vowel
    end if
    else
    inside_word := false # Reset inside_word flag if character is a space or punctuation
    end if
end for

# Output the results
Print("Length of the sentence:", length)
Print("Number of words in the sentence:", word_count)
Print("Number of vowels in the sentence:", vowel_count)
end

 */


// CODE IN JAVASCIPT

function sentenceAnalysis(sentence) {
    // Initialize variables
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let insideWord = false;

    // Helper function to check if a character is a vowel
    function isVowel(char) {
    return 'aeiouAEIOU'.includes(char);
    }

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];
      length++; // Increment the character count (length)

      // Check if the character is a letter (alphabet) and not a space
    if (/^[A-Za-z]$/.test(character)) {
        if (!insideWord) {
          wordCount++; // Increment the word count if a new word starts
        insideWord = true;
        }

        // Check if the character is a vowel
        if (isVowel(character)) {
          vowelCount++; // Increment vowel count if character is a vowel
        }
    } else {
        insideWord = false; // Reset insideWord flag if character is a space or punctuation
    }
    }

    // Output the results
    console.log("Length of the sentence:", length);
    console.log("Number of words in the sentence:", wordCount);
    console.log("Number of vowels in the sentence:", vowelCount);
}

  // Example usage:
const inputSentence = "This is an example sentence.";
sentenceAnalysis(inputSentence);
