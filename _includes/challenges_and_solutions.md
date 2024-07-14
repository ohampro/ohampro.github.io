{% assign hrefs = include.href | split: ', ' %}
{% for challenge in include.data %}
    {% assign ihref = hrefs[forloop.index0] %}
- **{{ challenge.title }}**: {{ challenge.desc }} {% if ihref %}{% include find_more.html href=ihref %}{% endif %}
  - **Solution**: {{ challenge.solution }}
  - **Impact**: {{ challenge.impact }}
{% endfor %}