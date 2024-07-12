{% for item in include.data %}
    {% if item.title == nil %}
        {% assign titleDesc = item | split: ': ' %}
        {% if titleDesc.size == 2 %}
{{ include.indent }}- **{{ titleDesc[0] }}**: {{ titleDesc[1] }}
        {% else %}
{{ include.indent }}- {{ item }}
        {% endif %}
    {% else %}
{{ include.indent }}- **{{ item.title }}**: {{ item.desc }}
        {% assign indent = include.indent | append: '  ' %}
    {% include md_list.md data=item.values indent=indent %}
    {% endif %}
{% endfor %}