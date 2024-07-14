{% for item in include.data %}
    {% if forloop.index > include.limit %}
        {% break %}
    {% endif %}

    {% if item.title == nil %}
        {% include md_list_item.md item=item indent=include.indent %}
    {% else %}
{{ include.indent }}- **{{ item.title }}**: {{ item.desc }}
        {% assign indent = include.indent | append: '  ' %}
        {% include md_list.md data=item.values indent=indent %}
    {% endif %}
{% endfor %}