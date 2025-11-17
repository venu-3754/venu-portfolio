/**
 * Social Media Configuration
 *
 * Central configuration for all social media links and profiles.
 * ⚠️ IMPORTANT: Update these values with your own social media URLs!
 *
 * Replace all placeholder usernames and URLs with your actual profiles.
 */

export const socialConfig = {
  /**
   * LinkedIn profile
   * Get your LinkedIn username from your profile URL:
   * https://linkedin.com/in/YOUR-USERNAME
   */
  linkedin: {
    username: 'Songa Venu Gopal',
    url: 'http://linkedin.com/in/songa-venu-gopal-074520280',
    label: 'LinkedIn',
  },

  /**
   * GitHub profile
   * Your GitHub username
   */
  github: {
    username: 'venu-3754',
    url: 'https://github.com/venu-3754',
    label: 'GitHub',
  },

  /**
   * Twitter/X profile
   * Your Twitter/X handle (without the @ symbol)
   */

  /**
   * Additional social platforms (optional)
   * Uncomment and configure as needed:
   */

  email: {
    address: 'songavenugopal@gmail.com',
    url: 'mailto:songavenugopal@gmail.com',
    label: 'Email',
  },

  // mastodon: {
  //   username: '@yourusername@mastodon.social',
  //   url: 'https://mastodon.social/@yourusername',
  //   label: 'Mastodon',
  // },

  // medium: {
  //   username: 'yourusername',
  //   url: 'https://medium.com/@yourusername',
  //   label: 'Medium',
  // },
} as const;

export type SocialConfig = typeof socialConfig;
