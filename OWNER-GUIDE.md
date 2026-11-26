# NAT ONE Properties — Owner guide

Owner dashboard: https://natoneproperties.vercel.app/?admin=1
Owner email: info@natoneproperties.co.za
The temporary password is provided privately and must not be committed to GitHub.

Live use requires DATABASE_URL to be configured in Vercel for the dedicated Neon database. The password is verified on the server. Never share it publicly.

1. Open the owner dashboard and sign in.
2. Select Add property. Choose for sale or rent; enter title, town, price, bedrooms, bathrooms, description and photo. Owner-added properties publish immediately. Photos are resized automatically.
3. Edit updates the details. Approve publishes a pending submission; Reject/unpublish hides it. Delete removes it after confirmation.
4. Check the public website from another device to confirm the listing is visible.
5. Sign out on shared devices. The practice dashboard is local only and does not publish real properties. If live connection fails, no public submission is saved locally.

Before launch: test cross-device persistence and all admin actions; rotate temporary password; add rate limiting and monitoring. The listed demo properties are fictional.
