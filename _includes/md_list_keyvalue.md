{% assign key = include.item[0] %}
{% assign value = include.item[1] %}

{% assign firstItem = value | first %}
{% if firstItem == nil %}
    {% assign firstItem = key | append: ': ' | append: value %}
    {% include md_list_item.md item=firstItem indent=include.indent header=include.header %}

{% else %}
    {% include md_list_item.md item=key indent=include.indent bold=true header=include.header %}
    {% assign indent = include.indent | append: '  ' %}
    {% include md_list.md data=value indent=indent header=include.header %}

{% endif %}