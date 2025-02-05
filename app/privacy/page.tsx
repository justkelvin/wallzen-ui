'use client'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const TIMESTAMP = '2025-02-04 22:44:44'
const CURRENT_USER = 'justkelvin'

export default function Privacy() {
    const privacyPolicy = `
# Privacy Policy

**Last Updated:** ${TIMESTAMP}

## Introduction

Welcome to WallZen. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our service.

## Information We Collect

### Automatically Collected Information
- **Log Data**: IP addresses, browser type, browser version
- **Usage Data**: Pages visited, time spent on pages, download statistics
- **Technical Data**: Screen resolution, device type, operating system

### Information You Provide
- **Account Information**: GitHub username when authenticating
- **Usage Patterns**: Wallpaper preferences, search history, download history
- **API Usage**: API key usage and request patterns

## How We Use Your Information

### Core Service Functionality
- Providing and maintaining the wallpaper service
- Processing and serving wallpaper downloads
- Generating preview images
- Managing API access and rate limiting

### Service Improvement
- Analyzing usage patterns to improve user experience
- Monitoring API performance
- Debugging and error tracking
- Feature development based on user behavior

### Security and Protection
- Preventing abuse and unauthorized access
- Detecting and preventing fraud
- Enforcing rate limits and fair usage policies

## Data Storage and Security

### Storage Duration
- **Log Data**: Retained for 30 days
- **Usage Statistics**: Aggregated after 90 days
- **Account Data**: Retained until account deletion

### Security Measures
- **Encryption**: All data in transit is encrypted using TLS
- **Access Control**: Strict access controls for internal systems
- **Monitoring**: 24/7 security monitoring and threat detection

## API Usage

### API Privacy Considerations
- **Rate Limiting**: We track API usage for rate limiting purposes
- **Authentication**: API keys are required for certain endpoints
- **Usage Metrics**: We collect anonymous usage statistics

### Data Retention for API Users
- API keys and usage patterns are retained for 12 months
- Download statistics are aggregated monthly
- Individual request logs are retained for 30 days

## Cookies and Tracking

### Essential Cookies
- **Session Management**: For maintaining user sessions
- **Rate Limiting**: For tracking API usage
- **Security**: For preventing abuse and unauthorized access

### Analytics
- We use anonymous analytics to improve our service
- No personal information is shared with third parties
- You can opt-out of analytics tracking

## Your Rights

### Access Rights
- Request a copy of your personal data
- View your usage history and preferences
- Export your API usage statistics

### Control Rights
- Delete your account and associated data
- Opt-out of analytics tracking
- Modify your preferences

### Data Portability
- Export your data in a machine-readable format
- Transfer your data to another service
- Download your usage history

## Children's Privacy

WallZen is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.

## Changes to This Policy

We may update this privacy policy from time to time. We will notify users of any material changes by:
- Posting the new policy on this page
- Updating the "Last Updated" date
- Sending an email to registered users (for significant changes)

## Contact Information

If you have questions about this privacy policy, please contact us:
- **Email**: privacy@wallzen.com
- **GitHub**: [@${CURRENT_USER}](https://github.com/${CURRENT_USER})
- **Repository**: [WallZen Repository](https://github.com/${CURRENT_USER}/wallzen)

## Compliance

### GDPR Compliance
- Right to access your data
- Right to be forgotten
- Data portability
- Consent management
- Data breach notification

### CCPA Compliance
- Right to know what personal information is collected
- Right to delete personal information
- Right to opt-out of data sharing
- Right to non-discrimination for exercising rights

## Data Protection Officer

Our Data Protection Officer can be reached at:
- **Email**: dpo@wallzen.com
- **Address**: [Contact us for physical address]
- **Hours**: Monday to Friday, 9 AM - 5 PM UTC

## Third-Party Services

### GitHub Integration
- We use GitHub for authentication
- GitHub's privacy policy applies to authentication data
- We only access public GitHub profile information

### Content Delivery
- We use CDNs to deliver wallpapers efficiently
- CDN providers may collect anonymous usage statistics
- All CDN providers are GDPR compliant

## Technical Details

### Data Processing
- Image processing for previews
- Metadata extraction from wallpapers
- Usage statistics aggregation

### Security Measures
- Regular security audits
- Vulnerability scanning
- Incident response procedures

## Disclaimer

While we strive to protect your privacy, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.

---

_This privacy policy was last updated on ${TIMESTAMP}_
`

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="prose prose-invert prose-pre:bg-gray-800 prose-pre:text-gray-100 prose-code:text-gray-100 prose-headings:text-white prose-strong:text-white prose-a:text-blue-400 max-w-none">
                <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
            </div>

            {/* Quick Navigation */}
            <div className="fixed bottom-8 right-8 flex flex-col gap-2">
                <a
                    href="#top"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    title="Back to top"
                >
                    ↑
                </a>
                <a
                    href="mailto:privacy@wallzen.com"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    title="Contact Privacy Team"
                >
                    ✉
                </a>
            </div>
        </div>
    )
}