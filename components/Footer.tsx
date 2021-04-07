import React from 'react'
import Link from 'next/link'
import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import YouTubeIcon from 'mdi-react/YoutubeIcon'

interface Props {
    minimal?: boolean
}

export default function Footer({ minimal }: Props) {
    return (
        <footer className={`${minimal ? '' : 'pt-6 pb-2'}`}>
            <div className="footer__container container">
                {!minimal && (
                    <>
                        <div className="row footer__nav-sections">
                            <div className="col-sm-6 col-md-3 col-lg-2 mt-3 mb-3 order-md-2">
                                <h3 className="footer__nav-header">About Sourcegraph</h3>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link href="https://about.sourcegraph.com/case-studies">
                                            <a>Case studies</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="https://about.sourcegraph.com/customers">
                                            <a>Customers</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="https://about.sourcegraph.com/pricing">
                                            <a>Pricing</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="https://info.sourcegraph.com/hubfs/CTA%20assets/Sourcegraph-overview.pdf"
                                            target="_blank"
                                            rel="noopener"
                                            className="bigCode"
                                        >
                                            Not a developer?
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-2 mt-3 mb-3 order-md-3">
                                <h3 className="footer__nav-header">Resources</h3>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a href="https://about.sourcegraph.com/blog">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md">
                                            Changelog
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://docs.sourcegraph.com">Documentation</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://about.sourcegraph.com/podcast">Podcast</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://info.sourcegraph.com/emergence-of-big-code-2020-survey">
                                            Big code survey
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-2 mt-3 mb-3 order-md-4">
                                <h3 className="footer__nav-header">Company</h3>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a href="https://about.sourcegraph.com/about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://about.sourcegraph.com/company/careers">Careers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://about.sourcegraph.com/contact">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://about.sourcegraph.com/handbook">Handbook</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://about.sourcegraph.com/news">News</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://about.sourcegraph.com/company/strategy">
                                            Sourcegraph strategy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-3 mb-5 order-md-1">
                                <a className="row footer__logo ml-1" href="/">
                                    <span role="img" aria-label="Sourcegraph - Universal code search">
                                        {' '}
                                    </span>
                                </a>
                                <ul className="nav footer__social mt-1">
                                    <li className="nav-item">
                                        <a
                                            href="https://github.com/sourcegraph"
                                            target="_blank"
                                            rel="nofollow noopener"
                                            aria-label="GitHub"
                                        >
                                            <GithubIcon />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="https://twitter.com/srcgraph"
                                            target="_blank"
                                            rel="nofollow noopener"
                                            aria-label="Twitter"
                                        >
                                            <TwitterIcon />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="https://www.linkedin.com/company/4803356/"
                                            target="_blank"
                                            rel="nofollow noopener"
                                            aria-label="LinkedIn"
                                        >
                                            <LinkedinIcon />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="https://www.youtube.com/c/Sourcegraph/featured"
                                            target="_blank"
                                            rel="nofollow noopener"
                                            aria-label="YouTube"
                                        >
                                            <YouTubeIcon />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}
                <div className="footer__postscript d-flex justify-content-between pt-4 pb-2 small">
                    <ul className="nav">
                        <li className="nav-item text-muted mr-3">&copy; 2021 Sourcegraph</li>
                        <li className="nav-item">
                            <a href="/terms" className="nav-link">
                                Terms
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/security" className="nav-link">
                                Security
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/privacy" className="nav-link">
                                Privacy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
