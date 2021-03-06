
import React from 'react'
import ArticleHeader from './ArticleHeader'

const Article = ({ node, excerpt = false }) => {
  node.slug = '#'
  return (
				<div className="c-article c-card u-marginBottomLarge">
          <ArticleHeader node={node} />
          { node.featureImage &&
            node.featureImage.responsiveResolution.src &&
            <img
              style={{ margin: 0 }}
              width={node.featureImage.responsiveResolution.width}
              height={node.featureImage.responsiveResolution.height}
              src={node.featureImage.responsiveResolution.src}
              srcSet={node.featureImage.responsiveResolution.srcSet}
            />
          }
          <div dangerouslySetInnerHTML={{ __html: node.contentModules[0].copy.childMarkdownRemark.html }}/>

				</div>
  )
}

export default Article
