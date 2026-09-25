document.addEventListener('DOMContentLoaded', () => {
  const openEnvelope = document.getElementById('openEnvelope');
  if (openEnvelope) {
    openEnvelope.addEventListener('click', () => {
      document.body.classList.add('opening');
      window.setTimeout(() => {
        window.location.href = 'letter.html';
      }, 850);
    });
  }

  const loveLetter = document.getElementById('loveLetter');
  const saveStatus = document.getElementById('saveStatus');
  const STORAGE_KEY = 'rl-third-monthsary-letter';
  const DEFAULT_LETTER = `To my beautiful baby,

Happy third monthiversary, my love. ❤️

It still feels unbelievable to me that on June 26, 2026, in the middle of the night, I met you in Roblox, and something so simple turned into the most beautiful thing that has ever happened to me. We were just playing together that night, not knowing that we were beginning something that would become so important, so precious, and so deeply personal to both of us. Out of all the people, all the places, and all the moments in this world, somehow it was you and me, on that night. And I will always be grateful for that.

Baby, I want you to know how much I appreciate everything you do for me. I appreciate every time you take care of me, every time you worry about me, every time you ask if I’m okay, every time you make sure I’ve eaten, rested, or feel loved. I appreciate the little things you do that you might not even realize mean so much to me. I appreciate the way you listen to me, the way you stay with me, the way you make space for my feelings, and the way you love me even when I am not at my best.

You have given me comfort when I needed it, patience when I was difficult, reassurance when I was afraid, and love when I felt like I needed it the most. You have made me feel cared for in ways I cannot always put into words. I hope you always know that I see those things. I notice them. I remember them. And I treasure every single one.

And baby, I especially want you to remember something you told me.

You asked me to choose us, even on the worst days.
You asked me not to give up on each other when things become difficult.
You asked me to keep choosing you, even when life becomes hard.

Please never forget that.

Because I choose you.

I choose you on the beautiful days when everything feels easy.
I choose you on the difficult days when we misunderstand each other.
I choose you when we are laughing until we cannot breathe, and I choose you when we are tired, hurt, frustrated, or scared.

I do not want a love that only survives when everything is perfect. I want the kind of love that stays, listens, learns, forgives, grows, and tries again.

So when life gets hard, I want us to remember that we are on the same side. I want us to hold onto each other instead of letting go. I want us to talk things through, understand each other, forgive each other, and keep building what we started.

Because I never want to give up on you.

I want to spend this life with you. I want the ordinary days with you. The sleepy mornings, the silly arguments, the late-night conversations, the quiet moments, the celebrations, the difficult days, the growing pains, the victories, the failures, and all the little moments in between.

I want to do life with you.

I want us to build our own home together, a place filled with love, peace, laughter, comfort, and all the little things we once dreamed about. I want us to look around one day and realize that the life we imagined together is finally real.

You call me your 11:11 wish, and I cannot even explain how much that means to me. Knowing that you see me as your wish, something you hoped for and somehow found, is one of the sweetest things anyone could ever give my heart.

But the truth is, baby, you are my wish too.

You are the person I want beside me.
The person I want to come home to.
The person I want to tell everything to.
The person I want to grow old with.
The person I want to choose over and over again.

You are my everything.

And three months in, I already know that I do not want this to be just three months. I want three months to become a year, a year to become decades, and decades to become a lifetime.

And even one lifetime does not feel like enough.

I want you in this life.
I want you in the afterlife.
And in every life after that, I want you to find me again and again just like you promised.

No matter how many times life changes, no matter how many difficult seasons come, no matter how many things we have to work through, I want you. You and only you.

I love you so so much my beautiful baby. More than these words can properly hold.

Thank you for finding me.
Thank you for loving me.
Thank you for taking care of me.
Thank you for choosing me.
And thank you for reminding me that no matter how hard things become, we should keep choosing each other.

So today, on our third monthiversary, I want to remind us that 

I choose you.
I choose us.
And I will keep choosing you.

I am looking forward to forever with you. you are my last, my always and my eternity. ❤️

Happy third monthiversary, my beautiful baby.
I love you, and I always will forever.

Yours only in this life and every life,
Your loving baby`;

  if (loveLetter) {
    const saved = localStorage.getItem(STORAGE_KEY);
    loveLetter.value = saved ?? DEFAULT_LETTER;

    let saveTimer;
    loveLetter.addEventListener('input', () => {
      window.clearTimeout(saveTimer);
      if (saveStatus) saveStatus.textContent = 'Saving...';
      saveTimer = window.setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, loveLetter.value);
        if (saveStatus) saveStatus.textContent = 'Saved automatically ♡';
      }, 300);
    });
  }


  // Replace missing memory images with a clean placeholder card.
  document.querySelectorAll('.polaroid img').forEach((img) => {
    img.addEventListener('error', () => {
      const placeholder = document.createElement('div');
      placeholder.className = 'photo-placeholder';
      placeholder.textContent = 'Add your photo here ♡';
      img.replaceWith(placeholder);
    }, { once: true });
  });

  const closeStory = document.getElementById('closeStory');
  const memoriesScene = document.getElementById('memoriesScene');
  if (closeStory && memoriesScene) {
    closeStory.addEventListener('click', () => {
      memoriesScene.classList.add('closing');
      window.setTimeout(() => {
        window.location.href = 'index.html?closed=1';
      }, 1350);
    });
  }

  // If the cover was reached from the closing animation, briefly emphasize the envelope.
  if (document.body.classList.contains('cover-page')) {
    const params = new URLSearchParams(window.location.search);
    if (params.get('closed') === '1') {
      const envelope = document.querySelector('.envelope-wrap');
      if (envelope) {
        envelope.animate(
          [
            { opacity: 0, transform: 'translateX(-50%) translateY(25px) scale(.8)' },
            { opacity: 1, transform: 'translateX(-50%) translateY(0) scale(1)' }
          ],
          { duration: 700, easing: 'cubic-bezier(.2,.8,.2,1)' }
        );
      }
      history.replaceState({}, '', 'index.html');
    }
  }
});
