{% assign outcomes = include.data %}
- **Results**: {{outcomes.results}}
- **Impact**: {{outcomes.impact}}
- **Feedback**: {% include md_list.md data=outcomes.feedback indent='   ' %}