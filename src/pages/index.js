/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import styles from './styles.module.css'
import apps from '../apps'

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig: { customFields = {}, tagline } = {} } = context
  return (
    <Layout permalink='/' title={tagline} description={customFields.description}>
      <main>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroProjectTagline}>
              <img alt='Otomi logo' className={styles.heroLogo} src={useBaseUrl('img/otomi-logo.svg')} />
              <span className={styles.heroProjectKeywords}>Open Source</span> release planned for{' '}
              <span className={styles.heroProjectKeywords}>12 januari (15:00 CET)</span>. So watch this space and{' '}
              <span className={styles.heroProjectKeywords}>come back soon!</span>
            </h1>
          </div>
        </div>
        <div id='appsuite' className={clsx(styles.announcement, styles.announcementDark)}>
          <div className={styles.announcementInner}>
            Check out our list of{' '}
            <span className={styles.heroProjectKeywords}>readily integrated open source apps</span>
          </div>
        </div>
        <div className={clsx(styles.announcement)}>
          <div className={`${clsx(styles.appsContainer, styles.announcementLight)}`}>
            <div className={`row ${clsx(styles.center)}`}>
              {apps.map((app) => (
                <div className='col col--3' key={app.name}>
                  <div className='avatar avatar--vertical margin-bottom--lg'>
                    <a href={app.href}>
                      <img
                        alt={app.name}
                        className={`avatar__photo avatar__photo--lg ${clsx(styles.logo)}`}
                        src={useBaseUrl(`img/${app.src}`)}
                      />
                    </a>
                    <div className='avatar__intro padding-top--sm'>
                      <h3 className='avatar__name'>{app.name}</h3>
                      <small className={`row ${clsx(styles.appDescription)}`}>{app.desc}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
