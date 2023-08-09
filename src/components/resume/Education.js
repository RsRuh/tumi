import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Nowrin Jahan Nila"
            subTitle="Ailchara College, Kushtia"
            postLink="https://www.facebook.com/permalink.php?story_fbid=pfbid02y8rudcTfeAYxgCbTnB9v2wywFfSkLWYopuc5NSPgMeG3HTGTzSoMe7EYTg49HXvYl&id=100010465983769"
            des="এক সাথে ২০ টাকার ঝালমুড়ি কিনার চেয়ে
            ৫ টাকার করে ৪ বার কিনেন বিশ্বাস করেন বেশি পাইবেন..🙂"
          />
          <ResumeCard
            title="Nidhi Afrin Safa"
            subTitle="Begum Badrunnessa Govd. Girls' College."
            postLink="https://www.facebook.com/permalink.php?story_fbid=pfbid02ceyxsCD3mQtnLYe2ki9p5n2cTWMdLGRwUsgRLixv53dvfgzM8mVHEygNQi2oHv5Wl&id=100095187627858"
            des="__ღ᭄বৃষ্টি আপুর মনে হয় ব্রেকাপ হইছেღ۵🥺࿐
            __ღ᭄তাই এতো কান্না কাটি করছে...🌧️🌧️"
          />
          <ResumeCard
            title="Safa Rahman"
            subTitle="Eden Mohila College, Dhaka"
            postLink="https://www.facebook.com/permalink.php?story_fbid=pfbid037GkvjLfq8HQeAJbkF675RfpcqZber2aBXnDdF4iEo1Mmcs4xznJiG78fHmhYDxegl&id=100095187627858"
            des="-
            -- কেও কল্পনাতে পেয়ে আগলে রাখে ღ᭄∘࿐ ❥༊-আর....!! ❥༊-কেউ বাস্তবে পেয়েও অবহেলা করে...🥀✨💫🥀"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Tamanna Tammu"
            subTitle="Alampur Baliapara School & College"
            postLink="https://www.facebook.com/permalink.php?story_fbid=pfbid024ab6nkJGzGpvukXUJ7x4tRQjS9gwzxxgCgb9SMg2qKBP8Ey7awV6JhtBVqaSPfQfl&id=100095187627858"
            des="নতুন একটা 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 শিখলাম!🙂
            '𝐁𝐓𝐕' মানে.!🌚
            𝐁𝐚𝐛u 𝐓𝐨𝐦𝐚𝐤𝐞 𝐕𝐚𝐥𝐨𝐛𝐚𝐬𝐢.!🐸"
          />
          <ResumeCard
            title="Tashfia Tisha"
            subTitle="Begum Badrunnessa Government Girls' College"
            postLink="https://www.facebook.com/permalink.php?story_fbid=pfbid02G38d9yrt7r92uLHKhHT52gbU3qMSvUNX4yV4pjQ7TZNm1b9L4bv1GqyBjmCoGZ3gl&id=100095187627858"
            des="❥一༊❝উড়ন্ত ফানুস আর বহুরূপী মানুষ,
            দুটোর শুরুতেই আনন্দ❥一一一一一༊ এবং শেষটা আতঙ্কিত।
            ༉彡🖤🖤"
          />
          <ResumeCard
            title="Morioum Subah"
            subTitle="Begum Badrunnessa Government Girls' College"
            postLink="https://www.facebook.com/permalink.php?story_fbid=pfbid02Ga9XsYCsmu2xfqow9kBH2F6X3jcvYssWHuj6MkT9DJVgeoh2XSFP4QWLQjEGcXXQl&id=100095187627858"
            des="❥一༊❝মন থেকে চাওয়া জিনিষ গুলো༉彡
            মন
            খারাপ এর কারণ হয়ে দাঁড়ায়,,,!
            ༉彡🖤"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education