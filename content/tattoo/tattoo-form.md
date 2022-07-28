+++
title = "Custom tattoo project form"
tags = ["tattoo", "notes"]
date = "2022-07-17"
draft = false
desc = "Fill this form if you have a tattoo idea that you'd like to have done by me"
+++

Fill this form if you have an idea for a custom tattoo that you'd like to have done by me. When you've completed it, hit the submit button and then send the email that it will generate for you. I will answer your request by email at the address you provide as soon as possible.

<script>
function sendemail()
{

    var themes = ""
    if(document.getElementById("dark-fantasy").checked) {
      themes += "dark fantasy, "
    }
    if(document.getElementById("folklore").checked) {
      themes += "folklore, "
    }
    if(document.getElementById("symbols").checked) {
      themes += "symbols, "
    }
    if(document.getElementById("occultism").checked) {
      themes += "occultism, "
    }
    if(document.getElementById("woodcut").checked) {
      themes += "woodcut, "
    }
    if(document.getElementById("lettering").checked) {
      themes += "lettering, "
    }

    var body = "---- About me ----------------------" + "\n" + "\n";
    body += "First name: " + document.getElementById("first-name").value + "\n";
    body +=  "Last name: " + document.getElementById("last-name").value + "\n";
    body +=  "Preferred name: " + document.getElementById("preferred-name").value + "\n";
    body +=  "Pronouns: " + document.getElementById("pronouns").value + "\n";
    body +=  "Birthdate: " + document.getElementById("birthdate").value + "\n";
    body +=  "Email: " + document.getElementById("email").value + "\n";
    body +=  "Phone: " + document.getElementById("phone").value + "\n" + "\n";
    body +=  "---- About my tattoo project ---------" + "\n" + "\n";
    body +=  "Themes: " + themes + "\n";
    body +=  "Description: " + document.getElementById("description").value + "\n";
    body +=  "Location: " + document.getElementById("location").value + "\n";
    body +=  "Size: " + document.getElementById("size").value + "\n";
    var email = document.getElementById("email").value;
    var location = "mailto:lizbeth.poirier.m@gmail.com" + "?subject=Custom%20Tattoo%20Request&body=" + encodeURIComponent(body);
    window.location.href = location;
}
</script>

<form id="tattoo-project-form" action="javascript: sendemail()">

<fieldset>

<legend>About you</legend>

<label for="first-name">First name (required)</label>
<input id="first-name" type="text" required/>

<label for="last-name">Last name (required)</label>
<input id="last-name" type="text" required/>

<label for="preferred-name">Preferred name</label>
<input id="preferred-name" type="text"/>

<label for="pronouns">Pronouns</label>
<select id="pronouns">
  <option value="she/her">She/Her</option>
  <option value="he/him">He/Him</option>
  <option value="they/them">They/Them</option>
  <option value="ze/zir">Ze/Zir</option>
  <option value="Would prefer by name">Would prefer by name</option>
</select>

<label for="birthdate">Birthdate (required)</label>
<input id="birthdate" type="date" required/>

<label for="email">Email (required)</label>
<input id="email" type="email" required/>

<label for="phone">Phone number</label>
<input id="phone" type="tel"/>

</fieldset>

<fieldset>

<legend>About your project</legend>

<p>What subject matter apply to your tattoo? (required)</p>
<input id="dark-fantasy" type="checkbox" value="dark fantasy"/><label for="dark-fantasy" class="checkbox">Dark fantasy</label><br/>
<input id="folklore" type="checkbox" value="folklore"/><label for="folklore" class="checkbox">Folklore and myth</label><br/>
<input id="symbols" type="checkbox" value="symbols"/><label for="symbols" class="checkbox">Symbols and sigils</label><br/>
<input id="occultism" type="checkbox" value="occultism"/><label for="occultism" class="checkbox">Occultism and magic</label><br/>
<input id="woodcut" type="checkbox" value="woodcut"/><label for="woodcut" class="checkbox">Medieval-style woodcut</label><br/>
<input id="lettering" type="checkbox" value="lettering"/><label for="lettering" class="checkbox">Lettering</label>

<label for="description">Describe your tattoo idea (required)</label>
<textarea id="description" rows="8" required></textarea>

<label for="location">Where do you want it on your body? (required)</label>
<input id="location" type="text" required/>

<label for="size">What size do you have in mind? (required)</label>
<select id="size" required>
  <option value="small">Small size (3" x 3")</option>
  <option value="medium">Medium size (6" x 6")</option>
  <option value="large">Large size (8" x 8" and more)</option>
</select>

</fieldset>

<fieldset>

<legend>Consent and acknoledgements</legend>

<p>I AM 18 AND OVER (If you fail or do not provide a valid ID to check on day of, you'll lose your appointment/drawing/deposit)
</p>
<input id="over18" type="checkbox" required/><label for="over18" class="checkbox">YES</label>

<p>I understand that under no circumstances will another artist's work be copied, and the artist reserves the right to deny work on pieces that they don't feel is appropriate(IE designs that can be considered appropriation by other cultures). EXCEPTIONS: historical painting/sculpture/artifact, direct permission from an artist allowing fair use of a design of their creation, cultural piece that's from your ethnicity/religion/nationality/etc (please bring in all the details that your artist would need to know in order to create the design accurately and respectfully).</p>
<input type="checkbox" id="no-copy" required/><label for="no-copy" class="checkbox">YES</label>

<label>Before the appointment can be finalized, I will require a non-refundable deposit to be put toward the final price of the project; any rescheduling or cancellation must be made no closer than 48hrs from the appointment time. Deposit will be forfeit if you fail to do so.</label>
<input type="checkbox" id="deposit" required/><label for="deposit" class="checkbox">YES</label>

<label>Please be aware that my studio is a LGBTQIA+, Anti-racist, Pro Sex-Work, Intersectional Feminist, Body Positive space, meant to be safe for artists and other clients alike; please be respectful & mindful of this with words & body language. If you fail to do so, a ban will be issued.
</label>
<input type="checkbox" id="no-bullshit" required/><label for="no-bullshit" class="checkbox">YES</label>

</fieldset>

<input type="submit" value="Submit">

</form>

### Cancelling or rescheduling a tattoo

If for any reason you need to reschedule a tattoo appointment you should let me know 2 days or more in advance, otherwise you will lose your deposit.

### Changes to a drawing

I will send the drawing of your custom tattoo a couple days in advance of your appointment, if you request small changes I will do them right away and get the final drawing for the session, if you request big changes (the kind that necessitates re-drawing big parts or the whole design), I will ask for another deposit and reschedule the date of the tattoo so I can make the changes. It is best for you to really make sure you give me all the information and references that you can before I start drawing your design to avoid delays and extra fees.
